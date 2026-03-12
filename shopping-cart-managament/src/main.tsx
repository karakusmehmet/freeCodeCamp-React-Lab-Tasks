import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { CartProvider } from './context/CartProvider.tsx'
import { ProductsProvider } from './context/ProductsProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <ProductsProvider>
        <CartProvider>
            <App />
        </CartProvider>
    </ProductsProvider>
    
   
)
