import axios from 'axios';

async function getNextId() {
    const response = await axios.get('http://localhost:3001/postList');
    const lastPost = response.data[response.data.length - 1];
    return lastPost ? lastPost.id + 1 : 1;
}

// GET
// axios 요청을 통해 json server로부터 데이터를 받아오면 된다.
export const GetPosting = async () => {
    try {
        const response = await axios.get('http://localhost:3001/postList');
        return response.data;   // 가져온 데이터 반환
    }
    catch (error) {
        console.log('게시물 목록을 가져오는 중 오류 발생:', error);
        return [];
    }
}

// POST
export const addNewPosting = async (title, content) => {
    try {
        const id = await getNextId();   // 다음 id값 가져옴
        const response = await axios.post('http://localhost:3001/postList', {
            id,
            title,
            content,
        });
        console.log("post 됨????: " , response.data);
        // 서버에서 생성된 데이터 또는 다른 응답을 사용할 수 있음
        return response.data;
    } catch (error) {
        console.error('게시물 추가 실패:', error);
        throw error;
    }
}