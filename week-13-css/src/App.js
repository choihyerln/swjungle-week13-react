import React, { useState } from "react";
import CustomButton from "./components/Button.js";
import User from "./components/User.js";
import "./App.css";

function App() {
  // useState를 이용한 상태값 만들기
  const [userList, setUserList] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" }
  ]);
  // 유저의 입력값을 담을 상태
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = () => {
    const newUser = {
      id: userList.length + 1,
      age: age,
      name: name
    };
    setUserList([...userList, newUser]);
  };

  const deleteUserHandler = (id) => {
    const newUserList = userList.filter(user => user.id !== id);
    setUserList(newUserList);
  };

  return (
    <div className="app-container">
      <input value={name} placeholder="이름을 입력해주세요"
        onChange={(e) => setName(e.target.value)} />
      <input value={age} placeholder="나이를 입력해주세요"
        onChange={(e) => setAge(e.target.value)} />
      {/* map() - if문 추가 */}
      {userList.map((user) => {
        if (user.age >= 25) {
          return null
        }
        return <User user={user} key={user.id}
          handleDelete={deleteUserHandler} />;
      })}

      {/* 버튼 컴포넌트로 바꾸기 */}
      <CustomButton color="green" onClick={addUserHandler}>추가</CustomButton>
    </div>
  );
};

export default App;