import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react'
import { useContext,useState } from 'react';
import { assets } from '../assets/frontend_assets/assets'
import { useShopContext } from '../context/ShopContext'

const SearchBar = () => {

    const {showSearch,setShowSearch,searchitem,setSearchItem} = useShopContext()
    const [visible,setVisible] = useState(false)

    const location=useLocation();

    useEffect(() => {
        if (location.pathname ==='/collection') {
            setVisible(true)
        }
        else {
          setVisible(false)
          setShowSearch(false)
          setSearchItem("")  // clear search input when page changes to not collection page  or when search is closed  from the search bar on collection page.  // clear search input when page changes to not collection page  or when search is closed  from the search bar on collection page.
        }
        console.log("searched item: " + searchitem)
      }, [location]);

  
  return visible && showSearch ? (
    <div className=" border-t border-b bg-gray-100 text-center">
            <div className=" inline-flex items-center  justify-center border border-gray-300 px-5 py-2 my-5  mx-3 rounded-full w-3/4 sm:w-1/2">
              <input className=' bg-inherit  flex-1  text-sm outline-none' placeholder='Search products ' type="text"
                value={searchitem} onChange={(e)=>setSearchItem(e.target.value)}  />
                
              <img className=' w-4' src={assets.search_icon} alt="" />
              
            </div>
            <img  onClick={() => setShowSearch(false)} className='inline w-4  cursor-pointer' src={assets.cross_icon} alt="" />
                

    </div>
  ): null
}

export default SearchBar