import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header.jsx'
import RouterConfig from './config/RouterConfig.jsx'
import Loading from './components/Loading.jsx'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { setDrawer, calculateBasket, deleteFromBasket } from './redux/slices/basketSlice.jsx'
import { useEffect } from 'react'

function App() {
  const {products,drawer,totalAmount} = useSelector((store) => store.basket)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateBasket());
  },[])
  return (
    <div>
      <PageContainer>
        <Header/>
        <RouterConfig/>
        <Loading/>
        <Drawer className='drawer' anchor='right' open = {drawer} onClose={() => dispatch(setDrawer())}>
          {
            products && products.map((product) => {
              return (
                <div>
                  <div className='flex-row' style={{padding:"20px"}}>
                    <img src={product.image} alt="img" style={{marginRight:"5px"}} width={50} height={50} />
                    <p style={{width:"320px", marginLeft:"5px"}}>{product.title}({product.count})</p>
                    <p style={{fontWeight:"bold", width:"60px"}}>{product.price}TL</p>
                    <button onClick={() => dispatch(deleteFromBasket(product.id))} style={{padding:"5px", color:"white",border:"none", borderRadius:"8px", width:"50px", backgroundColor:"red"}}>Sil</button>
                  </div>
                  
                </div>
                
              )
            })    
          }
          <div>
            <p style={{textAlign:"center"}}>Toplam tutar: {totalAmount.toFixed(2)}</p>
          </div>
        </Drawer>
      </PageContainer>
    </div>    
  )
}

export default App
