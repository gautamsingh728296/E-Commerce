import React, { useContext } from 'react';
import './CartItem.css';
import { userContext } from '../../App';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItem = () => {
    const { all_product, cartItem, removeFromCart,getTotalCartAmount } = useContext(userContext);
    console.log("all_product", all_product);
console.log("cartItem", cartItem);


    return (
        <div className='cartitem'>
            <div className='cartitem_format_main'>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return (
                        <div key={e.id} className='cartitem_format cartitem_format_main'>
                            <img src={e.image} className='cartitem_product_icon' alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitem_quantity'>{cartItem[e.id]}</button>
                            <p>${e.new_price * cartItem[e.id]}</p>
                            <img className='cartitem_remove_icon' src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="" />
                        </div>
                    
                    );
                }
                return null;
            })}
            <div className='cartitem_down'>
                <div className="cartitem_total">
                    <h1>cart total</h1>
                    <div>
                        <div className='cartitem_total_item'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitem_total_item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitem_total_item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    <button>PROCEED TO CHECK</button>
                    </div>
                    <div className='cartitem_promocode'> 
                        <p>If you have a promcode enter it here</p>
                        <div className='cartitem_promobox'>
                            <input type="text" placeholder='PROMOCODE' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
