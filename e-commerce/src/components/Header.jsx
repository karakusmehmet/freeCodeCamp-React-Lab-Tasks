import React, { useState } from 'react'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
const Header = () => {
    const [theme,setTheme] = useState(false)
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
       <div className='flex-row'>
            <img className='logo' src="./src/images/chat.png" alt="chatlogo" />
            <p className='logo-text'>MEMO A.Ş</p>
       </div>

       <div className='flex-row'>
            <input className='search-input' type="text" placeholder='Bir şeyler ara'  />
            <div>
                
                {theme ? <FaMoon className='icons' onClick={changeTheme} /> :  <CiLight className='icons' onClick={changeTheme}/>  }
                <CiShoppingBasket className='icons' />
            </div>
       </div>
    </div>
  )
}

export default Header