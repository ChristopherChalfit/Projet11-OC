import { NavLink } from 'react-router-dom'
import Logos from '../../assets/images/argentBankLogo.png'
import './Header.sass'

export default function Header(){
    return (<header className="header">
    <NavLink to="/">
        <img src={Logos}></img>
    </NavLink>
    <nav className='header__navbar'>
        <NavLink to="/signin">
            <i className="fa fa-user-circle"></i>
            Sign In
        </NavLink>
    </nav>
  </header>)
}