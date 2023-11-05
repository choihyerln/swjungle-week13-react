import './App.css';
import { type } from "os";
import react, { useEffect, useState } from "react";
import { Input } from "antd";
const { TextArea } = Input;

function App() {
  return (
    <div className="App">
      <h1>Diary</h1>
        <h2>제목</h2>
        <div>
          내용
        </div>
      <div>
        {/* input 들어올 자리 */}
        <Input
        className="title"
        placeholder="제목을 입력하세요"
        // value={title}
        // onChange={(e) => {
        //   setTitle(e.target.value);
        // }}
        showCount
        maxLength={5}
      />
      <br />
      <br />
      <TextArea
        className="content"
        placeholder="본문을 입력하세요"
        // value={content}
        // onChange={(e) => {
        //   setContent(e.target.value);
        // }}
        showCount
        maxLength={20}
      />
      </div>
    </div>
  );
}

export default App;