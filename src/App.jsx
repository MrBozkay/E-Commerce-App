import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Navbar1 from './components/Navbar1'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'




function App() {
  

  return (
    <div className="px-2 sm:px-[2vw] md:px-[3vw] lg:px-[4vw] ">
      <Navbar />
      <SearchBar />
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
