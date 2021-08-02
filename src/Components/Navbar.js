import React, { useContext } from 'react'
import logo from '../images/carrito-de-compras.svg'
import { Link } from 'react-router-dom'
import { auth } from '../Config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'
import './NavBar.css'

export const Navbar = ({ user }) => {

    const history = useHistory();
    const { totalQty } = useContext(CartContext);

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }

    return (
        <div className='navbox'>
            <div className='leftside'>
                <Link to="/" className=''>
                    <img className='navlink' src={logo} alt="" />
                </Link>
            </div>
            {!user && <div className='rightside'>
                <span><Link to="signup" className='navlink margen'>SIGN UP</Link></span>
                <span><Link to="login" className='navlink margen'>LOGIN</Link></span>
                <span></span>
            </div>}
            {user && <div className='rightside'>
                <span className='title-user'>Hola <Link to="/" className='navlink'>{user}</Link></span>
                <span><Link to="cartproducts" className='navlink margen'><Icon icon={cart} /></Link></span>
                <span className='no-of-products margen'>{totalQty}</span>
                <br/>
                <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
            </div>}
        </div>
    )
}
