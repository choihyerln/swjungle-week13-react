// 버튼 컴포넌트 분리 (분리 시 CSS하기 더 편함)
function CustomButton(props) {
    const { color, onClick, children } = props
    
    if (color)
      return (
        <button
          style={{ background: color, color: "white" }}
          onClick={onClick}>
          {children}
        </button>
      );
    return <button onClick={onclick}>{props.children}</button>;
}

// 외부 모듈(파일)에서 CustomButton 컴포넌트를 사용할 수 있게 export(내보내기) 해줘야 한다.
export default CustomButton;