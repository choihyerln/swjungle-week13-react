// import { useState } from "react";

// const App = () => {
//     const [number, setNumber] = useState(0);
//     return (
//         <div>
//             <div>{number}</div>
//             <button onClick={() => {
//                 // 세번 동시에 명령을 내리면 그 명령을 모아 순차적으로 한번씩 실행시킨다.
//                 setNumber((number) => { return number + 1 });
//                 setNumber((number) => { return number + 1 });
//                 setNumber((number) => { return number + 1 });
                
//                 // batch 업데이트로 한번에 처리하기 때문에 일반 업데이트 방식은 한번만 실행이 된다.
//                 // setNumber(number + 1);
//                 // setNumber(number + 1);
//                 // setNumber(number + 1);
//             }}>
//                 버튼
//             </button>
//         </div>
//     );
// }

// export default App;

// import React, { useEffect } from "react";

// const App = () => {
//     useEffect(() => {
            // 이 부분이 실행된다
//         console.log("hello useEffect");
//     });
//     return <div>Home</div>;
// }

// export default App;

import React, { useEffect, useState } from "react";

const App = () => {
    const [value, setValue] = useState("");

    useEffect(() => {
        console.log({ value });
        // console.log("hello useEffect");
    }, [value]);     // 비어있는 의존성 배열->처음에 딱 한번만 실행되고 그 이후로는 실행 X

    return (
        <div>
            <input type="text" value={value} onChange={(e) => {
                setValue(e.target.value);
            }} />
        </div>
    );
}

export default App;