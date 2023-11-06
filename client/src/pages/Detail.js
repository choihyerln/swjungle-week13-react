import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAtom } from 'jotai';
import { postListAtom } from './modules/atoms';
import { editPosting, deletePosting } from '../api/Api';
import { Input, Card } from "antd";
import Button from '@mui/material-next/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Fab from '@mui/material/Fab';
import CardHead from "../components/CardHead";
import Header from "./Header";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { ErrorAlert, SuccessAlert } from '../components/Alert';
const { TextArea } = Input;

function Detail() {
    // atom의 현재 상태와 업데이트 함수 가져옴
    const [postList, setPostList] = useAtom(postListAtom);

    const { postId } = useParams();
    const postIdInt = parseInt(postId, 10);

    // 전역상태로 해야함
    const targetPost = postList.find((p) => p.id === postIdInt)

    const [isEditing, setIsEditing] = useState(false);  // 수정 모드를 관리하는 상태
    const [editTitle, setEditTitle] = useState(targetPost.title);  // 수정된 제목을 저장하는 상태
    const [editContent, setEditContent] = useState(targetPost.content);  // 수정된 내용을 저장하는 상태

    const navigate = useNavigate();

    if (!targetPost || targetPost === undefined) {
        return <div>
            <h1>
                게시물을 찾을 수 없습니다.
            </h1>
        </div >;
    }

    // 수정하기 버튼 클릭 시 실행되야 할 함수
    const handleEditClick = () => {
        setIsEditing(true);     // 수정 모드로 전환
    };

    // 수정한거 저장 시 실행되어야 할 함수
    const handleSaveClick = async () => {
        // 수정된 내용 저장
        const updatePostList = postList.map((post) => {
            // 아이디가 같을 때 title->editTitle로 바꿔주고 content->editContent로 바꿔주고나서 setList
            if (post.id === postIdInt) {
                if (post.title.length < 4)
                    return;
                else
                    return {
                        ...post,
                        title: editTitle,
                        content: editContent
                    };
            }
            return post;
        });

        // POST 요청
        if (editTitle.length >= 3) {
            try {
                // 게시물 수정 요청 (patch 사용)
                await editPosting(postIdInt, editTitle, editContent);
                // 게시물 수정 후 해당 게시글 페이지로
                navigate(`../detail/${postIdInt}`);
                // <SuccessAlert open={true} title={"제목"} content={"sodkdkd"} />
            } catch (error) {
                console.error('게시물 추가 오류:', error);
            }
            setPostList(updatePostList);
            setIsEditing(false);
        }

        else {
            // <ErrorAlert />
        }
    };

    // 게시글 삭제
    const handleDeleteClick = async () => {
        if (window.confirm('게시글을 삭제하시겠습니까?')) {
            await deletePosting(postIdInt);
            navigate('/postList');
        };
    };

    return (
        <div className='App'>
            <div onClick={() => navigate('/')}>
                <Header />
            </div>

            <Fab onClick={() => {
                navigate('/postList')
            }}>
                <ListAltIcon fontSize="large" />
            </Fab>
            <Card
                bordered={false}
                style={{
                    width: 450,
                    margin: "0 auto" /* 페이지 중앙에 나타나도록 설정 */
                }}>
                <CardHead />
                {isEditing ? (
                    <>
                        <Input
                            className='title'
                            name='title'
                            placeholder='제목을 입력하세요'
                            value={editTitle}
                            onChange={e => {
                                setEditTitle(e.target.value)
                            }}
                            bordered={false}
                            showCount
                            maxLength={20}
                        />
                        <br />
                        <br />
                        <TextArea
                            className='content'
                            name='content'
                            placeholder='본문을 입력하세요'
                            value={editContent}
                            onChange={e => {
                                setEditContent(e.target.value)
                            }}
                            bordered={false}
                            showCount
                            maxLength={100}
                            style={{
                                height: 120,
                                marginBottom: 20,
                            }}
                        >
                        </TextArea>
                    </>
                ) : (
                    <>
                        <h2>{targetPost.title}</h2>
                        <div>{targetPost.content}</div>
                    </>
                )}
            </Card>

            <Button
                color="primary"
                variant="elevated"
                className='submit-button'
                onClick={isEditing ? handleSaveClick : handleEditClick}
                disabled={editTitle === '' || editContent === '' ? true : false}
            >
                {isEditing ? (
                    <>
                        <SaveAsIcon />
                        저장
                    </>
                ) : (
                    <>
                        <EditNoteIcon />
                        수정
                    </>
                )
                }
            </Button>
            <Button
                color="primary"
                variant="elevated"
                onClick={handleDeleteClick}
            >
                <>
                    <DeleteIcon />
                    삭제
                </>
            </Button>
            {/* <SuccessAlert open={true} title={"게시글 수정 완료!"} content={"This is a success alert — check it out!"} /> */}
        </div>
    );
}

export default Detail;