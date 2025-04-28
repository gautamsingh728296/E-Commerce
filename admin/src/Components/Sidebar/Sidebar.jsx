import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_item from '../../assets/hand_icon.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar_item">
            <img src={add_product_item} alt="" />
            <p>Add Product</p>
        </div>
      </Link>

      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar_item">
            <img src={add_product_item} alt="" />
            <p>Product List</p>
        </div>
      </Link>

    </div>
  )
}

export default Sidebar
