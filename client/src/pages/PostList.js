import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import { postListAtom } from './modules/atoms'; // 조타이 상태 추가
import { GetPosting } from '../api/Api';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Header from "./Header";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

function PostList() {
    const navigate = useNavigate();

    const [postList, setPostList] = useAtom(postListAtom); // 조타이 상태로 읽기
    // console.log("@@@ postList: ", postList);

    useEffect(() => {
        const loadPostList = async () => {
            try {
                const data = await GetPosting(); // 게시물 목록 가져오기
                setPostList(data);
            } catch (error) {
                console.error('게시물 목록을 불러오는 동안 오류가 발생했습니다:', error);
            }
        };
        // 게시물 목록을 불러온다
        loadPostList();
    }, [setPostList]);

return (
    <div className='App'>
        <Header />
        <Fab aria-label="edit" color="secondary" onClick={() => navigate('/post')}>
            <EditIcon fontSize="large" />
        </Fab>

        {/* 게시글 리스트 */}
        <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper', margin: '0 auto', marginTop: '20px', border: '0.5px solid grey' }}>
            {Array.isArray(postList) && postList.map((elem) => (
                <ListItem alignItems="flex-start" key={elem.id} onClick={() => navigate(`/detail/${elem.id}`)}>
                    <ListItemText
                        primary={elem.title}
                        secondary={elem.content}
                    />
                    <Divider variant="inset" component="li" />
                </ListItem>
            ))}
        </List>
    </div>
);
}

export default PostList;