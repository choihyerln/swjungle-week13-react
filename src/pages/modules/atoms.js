import { atom } from 'jotai';

// 변수: postListAtom를 사용해 상태관리중 -> 초기값으로 빈 배열 설정
export const postListAtom = atom([]);

// 전역 useState을 여기에 만들어줌
const setPostListAtom = atom(
    null, (get, set, data) => {
        // 나는 여기서 set을 해야함
        // api로부터 새로운 객체 받았으면 이전 객체를 덮어씌워야됨
        const prevData = get(postListAtom);
        console.log(data);
        set(
            postListAtom, [...prevData, data]
        )
    }
)