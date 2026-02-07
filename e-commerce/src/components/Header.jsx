import React, { useState } from 'react'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';

const Header = () => {
    const [theme,setTheme] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {products} = useSelector(store => store.basket)
    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(prev => {
            root.style.backgroundColor = prev ? "white" : "black"
            root.style.color = prev ? "black" : "white"
            return !prev;
        });
        
    }
  return (
    <div style={{display:"flex",alignItems:"center", justifyContent:"space-between"}}>
       <div className='flex-row' onClick={() => navigate("/") }>
            <img className='logo' src="./src/images/chat.png" alt="chatlogo" />
            <p className='logo-text'>MEMO A.Ş</p>
       </div>

       <div className='flex-row'>
            <input className='search-input' type="text" placeholder='Bir şeyler ara'  />
            <div>
                
                {theme ? <FaMoon className='icons' onClick={changeTheme} /> :  <CiLight className='icons' onClick={changeTheme}/>  }
                <Badge badgeContent={products.length} color="error">
                    <CiShoppingBasket onClick={() => dispatch(setDrawer())} style={{marginRight: "6px"}} className='icons' />
                </Badge>
            </div>
       </div>
    </div>
  )
}

export default Header