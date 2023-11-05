import { Link, useParams } from 'react-router-dom';
import { useAtom } from 'jotai';
import { postListAtom } from './modules/atoms';
import { Button, Card } from "antd";
import CardHead from "../components/CardHead";
import Header from "./Header";


function Detail() {
    const { postId } = useParams();
    // atom의 현재 상태와 업데이트 함수 가져옴
    const [postList] = useAtom(postListAtom);

    const postIdInt = parseInt(postId, 10);
    const targetPost = postList.find((p) => p.id === postIdInt)
    const editPost = () => {
        // setPost({ title: targetPost.title, content: targetPost.content });
    }
    if (!targetPost) {
        return <div>
            <h1>
            게시물을 찾을 수 없습니다.
            </h1>
        </div >;
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
                <h2>{targetPost.title}</h2>
                <div>{targetPost.content}</div>
            </Card>
            
            <Button
                type="primary"
                ghost
                className='submit-button'
                onClick={editPost}
            >
                수정
            </Button>
            <Button>삭제</Button>
        </div>
    );
}

export default Detail;