import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import ProductDetails from '../components/ProductDetails.jsx'

const RouterConfig = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product-details/:id' element={<ProductDetails/>}></Route>
    </Routes>
  )
}

export default RouterConfig