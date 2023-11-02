/* 브라우저를 새로고침 하면 다시 초기값으로 바뀐다.
 * setName을 통해서 바꾼 값은 어디에 저장되는 것이 아니기 때문에
 * 단순히 화면에서만 바뀐 값으로 다시 렌더링이 되는 것! */
import React, { useState } from "react";

function Child({ grandParentName, setName }) {
    
    function changeName() {
        setName("홍순이");
    }
  return (
    <div>
      {/* <button onClick={() => {
        setName("홍순이");  // 드디어 받은 setName을 실행!
      }}> */}
      <button onClick={changeName}>
        할아버지 이름 바꾸기
      </button>
      <div>{grandParentName}</div>
    </div>
  )
}

function Parent({grandParentName, setName}) {
  return <Child grandParentName={grandParentName} setName={setName} />; // 받아서 다시 child에게 주고
}

function GrandParent() {
  const [name, setName] = useState("홍길동");
  return <Parent grandParentName={name} setName={setName} />; // setName 주고
}

function App() {
  return <GrandParent />;
}

export default App;


// import React, { useState } from "react";

// function App() {
//   const [value, setValue] = useState("");
//   // 이벤트 핸들러 안에서 자스의 event 객체를 꺼내 사용할 수 있다.
//   const onChangeHandler = (event) => {
//     const inputValue = event.target.value;
//     setValue(inputValue);
//   }

//   console.log(value);

//   return (
//     <div>
//       {/* input 속성인 value에 state인 value를 넣어주면 연결 성공! */}
//       <input type="text" onChange={onChangeHandler} value={value} />
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";

function App() {
  const [dogs, setDogs] = useState(["말티즈"]);

  const onClickHandler = () => {
    // spread operator를 이용해서 dogs를 복사한다.
    // 그리고 나서 항목을 추가한다.
    setDogs([...dogs, "시고르자브르종"]);
  }

  console.log(dogs);
  return (
    <div>
      <button onClick={onClickHandler}>버튼</button>
    </div>
  );
}

export default App;
