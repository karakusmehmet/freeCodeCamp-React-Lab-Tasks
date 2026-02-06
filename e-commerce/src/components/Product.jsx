import React from 'react'
import '../css/Product.css'
const Product = ({product}) => {
    const {image, price, title} = product;
  return (
    <div className='card text-center' >
        <img className='image' src={image} alt="product" />
        <div >
            <p style={{height: "50px"}}>{title}</p>
            <h3>${price}</h3>
        </div>
        <div>
            <button className='detail-button'>Detayine Git</button>
        </div>
    </div>
  )
}

export default Product