import { NavLink ,Link } from 'react-router-dom'
import { assets} from '../assets/frontend_assets/assets'
import { useState ,useContext} from 'react'
import { useShopContext } from '../context/ShopContext'

const Navbar = () => {

    const [visible,setVisible] =useState(false)
    const {setShowSearch} = useShopContext()
  return (
    <div className='flex  items-center justify-between py-4 px-4 font-bold shadow-[0_4px_10px_rgba(138,43,226,0.5)]'>
        <Link to='/'>
      <img src={assets.company_logo} alt="logo img" className='w-20 ' />
        </Link>
      
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700 ' >

        <NavLink to='/' className='flex flex-col  items-center gap-2 uppercase hover:text-purple-300' >
        
            <p>Home  </p>
            <hr className='w-3/4 border-none h-[2px] 
             bg-gray-700 hidden' />

        </NavLink>

        <NavLink to='/collection' className='flex flex-col  items-center gap-2  uppercase hover:text-purple-300' >
            <p>Collection</p>
            <hr className='w-3/4 border-none h-[2px] bg-gray-700 hidden ' />
        </NavLink>

        <NavLink to='/about' className='flex flex-col  items-center gap-2 uppercase hover:text-purple-300' >
            <p>About</p>
            <hr className='w-3/4 border-none h-[2px] bg-gray-700 hidden ' />
        </NavLink>

        <NavLink to='/contact' className='flex flex-col  items-center gap-2 uppercase  hover:text-purple-300' >
            <p>Contact</p>
            <hr className='w-3/4 border-none h-[2px] bg-gray-500 hidden ' />
        </NavLink>

        
      </ul>
      <div className='flex items-center gap-6' >
        <div>
           <img className='w-5 cursor-pointer' src={assets.search_icon} onClick={()=>setShowSearch(prev=>!prev)} alt="" />
        </div>
        

        <div className='group relative'>
          <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
          <div className='hidden  group-hover:block dropdown-menu absolute right-0  pt-4'>
              <div className='flex flex-col gap-2 w-36 py-5 px-5 bg-slate-100  text-gray-600 rounded' >
                  <p className='cursor-pointer hover:text-blue-100'>
                    <Link to='/profile' className='cursor-pointer hover:text-blue-100'> My Profile</Link>
                  </p>
                  <p className='cursor-pointer hover:text-blue-100'> Orders</p>
                  <p className='cursor-pointer hover:text-blue-100'> Products</p>
                  <p className='cursor-pointer hover:text-blue-100'> Settings</p>
                  <p className='cursor-pointer hover:text-blue-100'>
                    <Link to='/login' className='cursor-pointer hover:text-blue-100'> Log Out</Link>
                  </p>
              </div>
          </div>
        
        </div>

        <Link to='/cart' className=' relative' >
        <img className='w-5 cursor-pointer min-w-5' src={assets.cart_icon} alt="" />
        <p className='absolute bottom-[-5px] right-[-5px] bg-red-600 rounded-full w-4 text-center   aspect-square  leading-4 text-white text-[8px]'>10</p>
        </Link>

        <img className='sm:hidden  w-5 cursor-pointer' src={assets.menu_icon} onClick={()=>setVisible(!visible)} alt='menu icon' />
      </div>



      {/* sidebar for small screens */}
      <div 
      className={`${visible?'w-full':'w-0'} z-20 bg-[#ffffff] absolute top-0 right-0 bottom-0 transition-all overflow-hidden cursor-pointer`}>
        <div onClick={()=>setVisible(!visible)} className='flex flex-col text-gray-500 border-gray-500' >
            <div className='flex items-center gap-2  p-3 border-b-[1px] border-gray-400' >
                <img src={assets.dropdown_icon} alt="" className=' w-5 px-1 rotate-180'  />
                <p className='text-base text-gray-700  pl-1'>Back </p>
            </div>
            <NavLink onClick={()=>setVisible(!visible)} to='/' className='flex flex-col py-4 pl-5 border-b-[1px] text-gray-700 border-gray-500' >
                <p>Home  </p>
            </NavLink>

            <NavLink onClick={()=>setVisible(!visible)} to='/collection' className='flex flex-col   py-4 pl-5 border-b-[1px] text-gray-700 border-gray-500' >
                <p>Collection</p>
            </NavLink>

            <NavLink onClick={()=>setVisible(!visible)} to='/about' className='flex flex-col  py-4 pl-5 border-b-[1px] text-gray-700 border-gray-500' >
                <p>About</p>
            </NavLink>

            <NavLink onClick={()=>setVisible(!visible)} to='/contact' className='flex flex-col  py-4 pl-5 border-b-[1px] text-gray-700 border-gray-500' >
                <p>Contact</p>
            </NavLink>
        </div>
       


      
      </div>

    </div>
  )
}

export default Navbar
