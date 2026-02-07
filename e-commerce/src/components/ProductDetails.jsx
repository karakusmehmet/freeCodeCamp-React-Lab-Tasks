import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasket} from '../redux/slices/basketSlice';


const ProductDetails = () => {

    const {id} = useParams();
    const {products,selectedProduct: {image, price, title, description}} = useSelector(store => store.product);
    const dispatch = useDispatch();
    const choosenProduct = products.find((product) => product.id === Number(id) );
    const [count,setCount] = useState(0);

    const increaseCount = () => {
        setCount(prev => prev + 1);
    }
    const decreaseCount = () => {
        setCount(prev => prev > 0 ? prev - 1 : 0);
    }
    useEffect(() => {
        dispatch(setSelectedProduct(choosenProduct))
    },[]);

    const addBasket = () => {
        const payload = {
            id,
            image,
            price,
            title,
            description,
            count,
        }

        dispatch(addToBasket(payload))
        dispatch(calculateBasket());
    }

    return (
       <div style={{marginTop: "30px", gap: "40px", display:"flex" , justifyContent:"center"}}>
            <div>
                <img src={image} width={300} height={500} alt="" />
            </div>
            <div style={{fontFamily: "Arial", display:'flex' , flexDirection:"column" , gap: "30px"}}>
                <h1 >{title}</h1>
                <p style={{fontSize: "20px"}}>{description}</p>
                <h1 style={{color:"red",fontSize: "50px"}}>${price}</h1>
                <div className='flex-row' style={{justifyContent:"start", gap:"15px"}}>
                    <CiCircleMinus onClick={decreaseCount}  style={{fontSize:"50px"}}  />
                    <span style={{fontSize:"35px"}}>{count}</span>
                    <CiCirclePlus onClick={increaseCount} style={{fontSize:"50px"}} />
                    
                </div>
                <div>
                    <button onClick={addBasket} style={{padding:"15px", backgroundColor:"red", color:"white" ,border:"none", borderRadius:"10px"}}>Sepete Ekle</button>
                </div>
            </div>
            
       </div>
    )
}

export default ProductDetails