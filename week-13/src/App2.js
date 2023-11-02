import React from 'react';
// function App() {
//   /* 이벤트 핸들러 함수 정의
//   function handleClick() {
//     alert("클릭~!");
//   } */

//   /* 화살표 함수 이용 */
//   const handleClick = () => {
//     alert("클릭~!");
//   }
//   // JS 영역
//   return (
//     // HTML 영역
//     <div
//       style={{
//         height: '100vh',
//         display: ' flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <span>이것은 내가 만든 App컴포넌트 입니다</span>
//       <button onClick={handleClick}>클릭!</button>
//     </div>
//   );
// }

// export default App;
// // Child 라는 새로운 컴포넌트 생성
// function Child() {
//   return <div>나는 자식입니다.</div>;
// }

// function App() {
//   // 마치 HTML 태그를 쓰듯이 한 컴포넌트 안에 다른 컴포넌트를 넣음
//   return <Child />;
// }
// // 내보내진 컴포넌트는 App, App 컴포넌트는 Child 컴포넌트를 자식으로 삼고 있음
// export default App;

// const start_half = <div>
//   <h1>안녕하세요!</h1>
//   <p>시작이 반이다!</p>
// </div>;

function Child() {
  return <div>연결이 잘 되었습니다.</div>;
}

function Parent() {
  return <Child />
}

function GrandParent() {
  return <Parent />
}

function App() {
  return <GrandParent />;
}

export default App;