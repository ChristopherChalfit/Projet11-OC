import { useSelector } from 'react-redux';
import './HeaderAccount.sass'
export default function HeaderAccount(){
    const firstname = useSelector((state) => state.user.firstname);

    return(<div className='header--account'>
    <h1>Welcome back<br />{firstname} !</h1>
    <button className="edit-button">Edit Name</button>
    </div>);
}