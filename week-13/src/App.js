import React, { useState } from "react";

function App() {
  // 초기값 0으로 설정
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>{value}</p>
      <button onClick={onClickHandlerPlus}>+ 1</button>
      <button onClick={onClickHandlerMinus}>- 1</button>
    </div>
  );

  function onClickHandlerPlus() {
    setValue(value+1);
  }
  
  function onClickHandlerMinus() {
    setValue(value-1);
  }
}

export default App;