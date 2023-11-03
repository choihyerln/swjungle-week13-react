// 삭제 User 컴포넌트 분리
import CustomButton from "./Button.js";

const User = (props) => {
    return (
      <div className="user-card">
        <div>{props.user.age}살 - {props.user.name}</div>
        {/* 버튼 컴포넌트로 바꾸기 */}
        <CustomButton color="red" onClick={() => props.handleDelete(props.user.id)}>
          삭제
        </CustomButton>
      </div>
    );
}

// 외부 모듈(파일)에서 User 컴포넌트를 사용할 수 있게 export(내보내기) 해줘야 한다.
export default User;