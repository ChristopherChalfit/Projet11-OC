import { useSelector } from 'react-redux';
import './HeaderAccount.sass'
export default function HeaderAccount(){
    const firstname = useSelector((state) => state.user.firstname);

    return(<>
    <h1>Welcome back<br />{firstname} !</h1>
    </>);
}