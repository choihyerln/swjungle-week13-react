import Header from './Header';
import { useNavigate } from "react-router-dom";
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import ListAltIcon from '@mui/icons-material/ListAlt';


function Main() {
    const navigate = useNavigate();

    return (
        <div className='App'>
            <Header />
            <Fab aria-label="edit" onClick={() => {
                navigate('/post')
            }}>
                <EditIcon fontSize="large" />
            </Fab>

            <Fab onClick={() => {
                navigate('/postList')
            }}>
                <ListAltIcon fontSize="large"/>
            </Fab>
        </div>
    )
}

export default Main;