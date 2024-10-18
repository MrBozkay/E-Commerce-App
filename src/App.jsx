import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Navbar1 from './components/Navbar1'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
// react toastify for toast message
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import { useShopContext } from './context/ShopContext';

function App() {
  
  const {user} = useShopContext();

  const location = useLocation();
 
  const showNavbar =() => {
        
    if(location.pathname === '/login' || location.pathname === '/register'){
      return false
    }else{
      return true
    }

  }

  return (
    <div className="px-0 ">
      <ToastContainer/>
      {showNavbar() ? <Navbar /> : null}
      
      <SearchBar />
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>

      {showNavbar() ? <Footer /> : null }
    </div>
  )
}

export default App
