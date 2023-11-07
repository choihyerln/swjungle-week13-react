import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <div className='App'>
            <h1 onClick={() => navigate('/')}>일기장</h1>
        </div>
    )
}

export default Header;