import axios from 'axios'
import React, { useState } from 'react'

const AddProduct = () => {
    const [value, setValue] = useState({
        name: "",
        category: "",
        new_price: "",
        old_price: ""
    });

    function changeHandler(e) {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
        console.log(e.target.value);
    }

    async function clikcHandler() {
        const obj = {
            name: value.name,
            category: value.category,
            new_price: value.new_price,
            old_price: value.old_price
        };
        console.log("axios");
        await axios.post("http://localhost:4000/addproduct", obj)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Error occurred while making the request:", error.message);
            });
    }

    return (
        <div>
            <p>Product title</p>
            <input type="text" name="name" placeholder='name' onChange={changeHandler} value={value.name} />
            <input type="text" name="category" placeholder='category' onChange={changeHandler} value={value.category} />
            <input type="text" name="new_price" placeholder='new_product' onChange={changeHandler} value={value.new_price} />
            <input type="text" name="old_price" placeholder='old_product' onChange={changeHandler} value={value.old_price} />
            <input type="button" name='btn' onClick={clikcHandler} value="hello" />
        </div>
    );
}

export default AddProduct;
