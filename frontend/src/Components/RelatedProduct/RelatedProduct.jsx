import React from 'react'
import './RelatedProduct.css'
import Item from '../Item/Item'
import new_collection from '../Assets/new_collections'
const RelatedProduct = () => {
  return (
    <div className='relatedproduct'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproduct_item">
            {new_collection.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
      
    </div>
  )
}

export default RelatedProduct
