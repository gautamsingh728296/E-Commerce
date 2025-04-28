import React, { useState } from 'react'
import './AddProduct.css'
import add_product_item from '../../assets/hand_icon.png'


const AddProduct = () => {
  const [image, setImage] = useState(false)
  const [productDetails, setProductDetails] = useState({
    // id:1,
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: ""
  })
  const imageHandler = (e) => {
    setImage(e.target.files[0])
  }
  const changeHandler = (e) => {
    console.log(e.target)
    setProductDetails({ ...productDetails, [e.target.name]: [e.target.value] })
  }

  const add_product = async () => {
    try {
      const formData = new FormData();
      formData.append('product', image);

      const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const responseData = await response.json();

      if (responseData.success) {
        const updatedProduct = { ...productDetails, image: responseData.img_url };
        console.log(updatedProduct.image);

        // productDetails.image = responseData.img_url
        // console.log(productDetails)
        // console.log(productDetails.name)
        // Perform further actions with updatedProduct if needed


         await fetch('http://localhost:4000/addproduct', {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              // id: productDetails.id,
              name: productDetails.name,
              image: productDetails.image,
              category: productDetails.category,
              new_price: productDetails.new_price,
              old_price: productDetails.old_price
          })
        }).then((response) => { 
          console.log(response)})
          .then((data) => {
            // console.log(data)
            data.success ? alert("Product Added") : alert("Failed")
          })






      } 
      else {
        console.error('Upload failed:', responseData && responseData.message);
        // Handle failed upload
      }
    } catch (error) {
      console.error('Error:', error.message);
      console.log("soethin is eror")
      console.log(error)
      // Handle error
    }
  };


  return (
    <div className='addproduct'>
      <div className="addproduct_itemfields">
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
      </div>
      <div className='addproduct_price'>
        <div className="addproduct_itemfields">
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' />
        </div>
        <div className="addproduct_itemfields">
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' />
        </div>
      </div>
      <div className='addproduct_itemfields'>
        <p>Product Category</p>
        <select name="category" className='add_product_selector'>
          <option value="women">women</option>
          <option value="men">men</option>
          <option value="kid">kid</option>
        </select>
      </div>
      <div className="addproduct_itemfield">
        <label htmlFor="file_input">
          <img style={{ width: '89px' }} src={image ? URL.createObjectURL(image) : add_product_item} alt="" />
        </label>
        <input type="file" onChange={imageHandler} name='image' id='file_input' hidden />
      </div>
      <button onClick={add_product} className='addproduct_btn'>ADD</button>
    </div>
  )
}

export default AddProduct
