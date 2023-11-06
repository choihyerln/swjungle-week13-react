import '../App.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewPosting } from '../api/Api';
import { Input, Card } from "antd";
import Button from '@mui/material-next/Button';
import ListAltIcon from '@mui/icons-material/ListAlt';
import UploadIcon from '@mui/icons-material/Upload';
import Fab from '@mui/material/Fab';
import CardHead from "../components/CardHead";
import Header from "./Header";
import { ErrorAlert } from '../components/Alert';
// import { Alert, AlertTitle, Dialog } from '@mui/material';
const { TextArea } = Input;

function Post() {
    const [post, setPost] = useState({
        title: '',
        content: '',
    });

    const navigate = useNavigate();

    const getValue = (e) => {
        const { name, value } = e.target;
        setPost({
            ...post,
            [name]: value
        });
    };

    const addPost = async () => {
        try {
            // 게시물 추가 요청
            await addNewPosting(post.title, post.content);
            // 게시물 추가 후 홈 화면으로 이동
            navigate('/postList');
        } catch (error) {
            console.error('게시물 추가 오류:', error);
        }
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
                <div className='form-wrapper'>
                    {/* input 들어올 자리 */}
                    <Input
                        className='title'
                        name='title'
                        placeholder='제목을 입력하세요'
                        value={post.title}
                        onChange={getValue}
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
                        value={post.content}
                        onChange={getValue}
                        bordered={false}
                        showCount
                        maxLength={100}
                        style={{
                            height: 120,
                            marginBottom: 20,
                        }}
                    />
                </div>
            </Card>
            <Button
                color="primary"
                variant="elevated"
                className='submit-button'
                onClick={() => {
                    if (post.title.length < 4)
                        <ErrorAlert />

                    else
                        addPost();
                }}
                disabled={post.title === '' || post.content === '' ? true : false}
            >
                <UploadIcon />
                업로드하기
            </Button>

        </div>
    );
}

export default Post; 