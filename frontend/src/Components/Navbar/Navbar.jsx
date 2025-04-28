import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { userContext } from '../../App'
import hand_icon from '../Assets/hand_icon.png'






const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItem } = useContext(userContext)
  const menuRef = useRef();

  const dropDown = (e)=>{
    menuRef.current.classList.toggle('nav_menu_visible')
    e.target.classList.toggle('open');
  }

  return (
    <div className='Navbar'>
      <Link to="/"> <div className="nav_logo">
        <img src={logo} alt="logo" />
        <p style={{ "textDecoration": "none" }}>SHOPPER</p>
      </div></Link>
      <img className='nav_dropdown' onClick={dropDown} src={hand_icon} style={{"width":"33px"}} alt="" />
      <ul ref={menuRef} className="nav_menu">
        <li onClick={() => setMenu("shop")}><Link style={{ "textDecoration": "none" }} to="/">Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("mens")}><Link style={{ "textDecoration": "none" }} to="/mens">Mens</Link>{menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("womens")}><Link style={{ "textDecoration": "none" }} to="/womens">Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("kids")}><Link style={{ "textDecoration": "none" }} to="/kids">Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav_login_cart">
        {localStorage.getItem('token') ? <button onClick={() => {
          localStorage.removeItem('token');
          window.location.replace('/') 
        }}>Logout</button> :
          <Link style={{ "textDecoration": "none" }} to="/login"><button>Login</button></Link>}
        <Link style={{ "textDecoration": "none" }} to="/cart"> <img src={cart_icon} alt="" /></Link>
        <div className="nav_cart_count">{getTotalCartItem()}</div>
      </div>
    </div>
  )
}

export default Navbar
