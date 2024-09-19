import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  ShopContextProvider from '../src/context/ShopContext';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>

      <App />

    </ShopContextProvider>
    
  </BrowserRouter>,
    
  
)