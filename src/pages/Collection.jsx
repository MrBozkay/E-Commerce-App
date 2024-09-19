import { useContext } from 'react'
import { useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useState } from 'react'
import { useRef } from 'react'
import {assets} from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import Search from '../components/Search'
import { CATEGORY, SUBCATEGORY } from '../data/categories';

const Collection = () => {

    const {products,showSearch,setShowSearch,searchitem,setSearchItem}= useContext(ShopContext)
    const [showfilter, setShowfilter]=useState(true)
    const [filterProducts, setFilterProducts]=useState([]);
    const [category, setCategory]=useState([]);
    const [subCategory, setSubCategory]=useState([]);
    const [sortType, setSortType]=useState('relavent');


    const toggleCategory = (e) => {
        const value = e.target.value;
        setCategory(prev => 
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    }

    const toggleSubCategory = (e) => {
        const value = e.target.value;
        setSubCategory(prev => 
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    }

    const applyFilters = () => {
        console.log("Category state:", category);
        
        let filteredProducts = products.filter(product => {
            // Apply search filter
            if (showSearch && searchitem.length > 0) {
                if (!product.name.toLowerCase().includes(searchitem.toLowerCase())) {
                    return false;
                }
            }
            
            // Apply category filter
            if (category.length > 0 && !category.includes(product.category)) {
                return false;
            }
            
            // Apply subcategory filter
            if (subCategory.length > 0 && !subCategory.includes(product.subCategory)) {
                return false;
            }
            
            return true;
        });

        setFilterProducts(filteredProducts);
        console.log("Filtered products:", filteredProducts.length);
    }

    useEffect(() => {
        applyFilters();
    }, [category, subCategory, searchitem, products, showSearch]);

    useEffect(() => {
        if (sortType !== "relevant") {
            setFilterProducts(prev => sortP([...prev], sortType));
        }
    }, [sortType]);

    const sortP = function(fp,sorttype) {
        
        switch (sorttype) {
            case 'asc':
                return fp.sort((a, b) => a.price - b.price);
            case 'desc':
                return fp.sort((a, b) => b.price - a.price);
            case 'oldest':
                return fp.sort((a, b) => new Date(a.date) - new Date(b.date));
            case 'newest':
                return fp.sort((a, b) => new Date(b.date) - new Date(a.date));
            default:
                return fp;
        }
    }

    const handlefilter=()=>{
        setShowfilter(!showfilter)
    }

   
  return (
    <div className='-z-40 flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t' >

        {/* Left side */}
        <div className="min-w-64 bg-gray-50 p-6 rounded-lg shadow-sm">
          {/* Filter options */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
            <button onClick={handlefilter} className="sm:hidden text-blue-600 hover:text-blue-800 focus:outline-none">
              <img 
                className={`h-3 transition-transform duration-300 ${showfilter ? "" : "-rotate-90"}`} 
                src={assets.arrow} 
                alt="Toggle filters"
              />
            </button>
          </div>
          
          <div className={`${showfilter ? "block" : "hidden sm:block"}`}>
            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Product Filters</h3>
              <div className="space-y-2">
                {CATEGORY.map((item, index) => (
                  <label key={index} className="flex items-center space-x-3 text-gray-600 hover:text-gray-800">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                      onChange={toggleCategory}
                      value={item}
                    />
                    <span className="text-sm">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* SubCategory Filter */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Type Filters</h3>
              <div className="space-y-2">
                {SUBCATEGORY.map((item, index) => (
                  <label key={index} className="flex items-center space-x-3 text-gray-600 hover:text-gray-800">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                      onChange={toggleSubCategory}
                      value={item}
                    />
                    <span className="text-sm">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right side  */}

        <div className='flex-1 '>

            <div className='flex justify-between text-base sm:text-xl mb-4'>

                <Title text1={"Our"} text2={" Collections"} />
                <select 
                className=' border-2 border-gray-300 text-sm px-3'
                onChange={(e) => setSortType(e.target.value)}>
                    <option value="relevant">Sort by : Relevant</option>
                    <option value="asc">Sort by: Low-High</option>
                    <option value="desc">Sort by: High-Low</option>
                    <option value="newest">Sort by: Newest</option>
                    <option value="oldest">Sort by: Oldest</option>
                </select>

            </div>
            
            {/* Search Bar */}
            <Search searchQuery={searchitem} setSearchQuery={setSearchItem} /> 

            {/* show filtered count */}
            <div>
                <p className='text-gray-600 text-sm'>Showing {filterProducts.length} of {products.length} results</p>
                <hr className='my-4 border border-blue-600' />

            </div>
        
            

            
            {/* rendering products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6 '>
                {filterProducts.map((product, index) => (
                    <ProductItem key = {index} id={product._id} name={product.name} image={product.image} price={product.price} />
                ))}
            </div>

            {/* Paginaiton */}

            {/* Pagination */}
            <div className='flex justify-center'>
                <button className='px-4 py-2 text-sm text-gray-500 bg-white border border-gray-400 rounded-md'>prev</button>
                <button className='px-4 py-2 text-sm text-gray-500 bg-white border border-gray-400 rounded-md'>1</button>
                <button className='px-4 py-2 text-sm text-gray-500 bg-white border border-gray-400 rounded-md'>2</button>
                <button className='px-4 py-2 text-sm text-gray-500 bg-white border border-gray-400 rounded-md'>3</button>
                <button className='px-4 py-2 text-sm text-gray-500 bg-white border border-gray-400 rounded-md'>next</button>
            </div>


        </div>

       

    </div>

    
     
       

    
    
  )
}

export default Collection
