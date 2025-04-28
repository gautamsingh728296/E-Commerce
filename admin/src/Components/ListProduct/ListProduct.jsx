import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cart_cross_icon.png'

const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([])

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproduct')
      .then((response) => { response.json() })
      .then((data) => { setAllproducts(data) })
  }
  const remove_product = async (id) => {
    try {
        const response = await fetch('http://localhost:4000/removeproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        });
        await fetchInfo()

        if (!response.ok) {
            throw new Error('Failed to remove product');
        }

        const data = await response.json();
        // You can handle the response data if needed
    } catch (error) {
        console.error('Error:', error.message);
        // Handle error, e.g., display an error message to the user
    }
};


  useEffect(() => {
    fetchInfo()
  }, [])
  return (
    <div className='listproduct'>
      <h1>All product List</h1>
      <div className='listproduct_format_main'>
        <p>Products</p>
        <p>title</p>
        <p>old price</p>
        <p>new price </p>
        <p>category</p>
        <p>remove</p>
      </div>
      <div className='listproduct_allproduct'>
        <hr />
        {allproducts.map((product, index) => {
          return <div key={index} className="listproduct_format_main listproduct_format ">
            <img src={product.image} alt="" className="listproduct_product_icon" />
            <p>{product.name}</p>
            <p>{product.old_price}</p>
            <p>{product.new_price}</p>
            <p>{product.category}</p>
            <img src={cross_icon} onClick={remove_product(product.id)} className='listproduct_remove_img' alt="" />
          </div>
        })}
      </div>
    </div>
  )
}

export default ListProduct
