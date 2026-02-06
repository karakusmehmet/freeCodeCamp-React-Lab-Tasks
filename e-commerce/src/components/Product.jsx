import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom';
const Product = ({product}) => {
    const {id,image, price, title} = product;
    const navigate = useNavigate();
  return (
    <div className='card text-center' >
        <img className='image' src={image} alt="product" />
        <div >
            <p style={{height: "50px"}}>{title}</p>
            <h3>${price}</h3>
        </div>
        <div>
            <button onClick={() => navigate("/product-details/" + id)} className='detail-button'>Detayine Git</button>
        </div>
    </div>
  )
}

export default Product 