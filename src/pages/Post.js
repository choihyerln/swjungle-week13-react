import '../App.css';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Card } from "antd";
import CardHead from "../components/CardHead";
import Header from "./Header";
// import { postListAtom } from './modules/atoms';  // 조타이 상태 추가
// import { useAtom } from 'jotai';
import { addNewPosting } from '../api/Api';
const { TextArea } = Input;

function Post() {
    const [post, setPost] = useState({
        title: '',
        content: ''
    });

    const navigate = useNavigate();

    // 게시글 리스트
    // const [postList, setPostList] = useAtom(postListAtom);

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
                type="primary"
                ghost
                className='submit-button'
                onClick={addPost}
            >
                작성하기  
            </Button>
        </div>
    );
}

export default Post; 