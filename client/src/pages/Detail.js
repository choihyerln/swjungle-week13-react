import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAtom } from 'jotai';
import { postListAtom } from './modules/atoms';
import { editPosting } from '../api/Api';
import { Input, Button, Card } from "antd";
import CardHead from "../components/CardHead";
import Header from "./Header";
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
                return {
                    ...post,
                    title: editTitle,
                    content: editContent
                };
            }
            return post;
        });
        
        // POST 요청
        try {
            // 게시물 수정 요청 (patch 사용)
            await editPosting(postIdInt, editTitle, editContent);
            // 게시물 수정 후 홈 화면으로 이동
            navigate(`../detail/${postIdInt}`);
            alert('수정되었습니다.');
        } catch (error) {
            console.error('게시물 추가 오류:', error);
        }
        setPostList(updatePostList);
        setIsEditing(false);
    };

    const handleDeleteClick = () => {
        
    }

    return (
        <div className="App">
            <Link to='/'>
                <Header />
            </Link>
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
                type="primary"
                ghost
                className='submit-button'
                onClick={isEditing ? handleSaveClick : handleEditClick}
                >
                    {isEditing ? '저장' : '수정'}
            </Button>
            <Button
                onClick={handleDeleteClick}
            >
                삭제
            </Button>
        </div>
    );
}

export default Detail;