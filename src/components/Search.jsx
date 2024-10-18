
import { useContext } from 'react';
import { assets } from '../assets/frontend_assets/assets'
import { useShopContext } from '../context/ShopContext'

const SearchBar = ({searchQuery,setSearchQuery}) => {

    const {showSearch,setShowSearch} = useShopContext()

  return (
    <div>
        <div className={`relative flex flex-row mb-4 ${showSearch ? '':'hidden'}`}>
                {/* search input */}
                <input className=' border-2 border-gray-300 bg-white h-10 w-full px-5 pr-16 mr-[26px] rounded-lg text-sm focus:outline-none'
                    type="search" value={searchQuery} 
                    onChange={(e)=>setSearchQuery(e.target.value)}  
                    placeholder='Search products ' />
                
                {/* search button */}
                <button className='absolute right-0 top-0 mt-3 mr-[36px]'>
                    <img className='h-4 w-4' src={assets.search_icon} alt="" />
                </button>
                {/* close button */}
                <button onClick={()=>setShowSearch(prev=>!prev)} className='absolute right-0 top-0 mt-3 mr-[-0px]'>
                    <img className='h-4 w-4 text-red-700' src={assets.cross_icon} alt="" />
                </button>
            </div>
    </div>
  )
}

export default SearchBar