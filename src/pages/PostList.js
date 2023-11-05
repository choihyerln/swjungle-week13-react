import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAtom } from 'jotai';
import { postListAtom } from './modules/atoms'; // 조타이 상태 추가
import { GetPosting } from '../api/Api';

function PostList() {
    const [postList, setPostList] = useAtom(postListAtom); // 조타이 상태로 읽기
    console.log("@@@ postList: ",postList);

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
            <div className='board-container'>
                {postList.map((elem) => (
                    <div key={elem.id}> {/* 고유한 키를 제공 */}
                        <h2>
                            <Link to={`/detail/${elem.id}`}>{elem.title}</Link>
                        </h2>
                        <div>{elem.content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostList;