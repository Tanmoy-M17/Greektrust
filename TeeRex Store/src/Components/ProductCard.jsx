import React from 'react'
import "../Styles/Productcard.css"
const ProductCard = ({data}) => {
  return (
    <div className='Box'>
        <h3 className='ProductName'>{data.name}</h3>
        <img className='ProductImage' src={data.imageURL} alt="" />
        <div className='Buttombox'>
        <h3 className='ProductPrice'>Rs.{data.price}</h3>
        <button className='AddToCart'>Add To Cart</button> 
        </div>
       
    </div>
  )
}

export default ProductCard