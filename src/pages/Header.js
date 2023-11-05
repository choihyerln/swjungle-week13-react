import { createGlobalStyle } from 'styled-components';
import { Link } from "react-router-dom";
import { Button } from 'antd';

const GlobalStyle = createGlobalStyle`
body {
    background: #e9ecef;
}
`;

function Header() {

    return (
        <div className='App'>
            <GlobalStyle />
            <h1><Link to='/'>일기쓰쇼</Link></h1>
            <Button type="primary">
                <Link to='/post'>글 쓰기</Link>
            </Button>
            <Button type="default">
                <Link to='/postList'>게시글 목록</Link>
            </Button>
        </div>
    )
}

export default Header;