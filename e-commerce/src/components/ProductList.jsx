import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllProduct } from '../redux/slices/productSlice.jsx'
import Product from './Product.jsx';

const ProductList = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(store => store.product);

    useEffect(() => {
        dispatch(getAllProduct())
    },[dispatch]);

  return (
    <div className='flex-row' style={{flexWrap: "wrap", marginTop: "25px"}}>
      {products && products.map((product) => (<Product key={product.id} product={product}/>))}
    </div>
  )
}

export default ProductList