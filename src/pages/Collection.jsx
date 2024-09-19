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
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(20);

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

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filterProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filterProducts.length / productsPerPage);

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

            {/* Right side */}
            <div className='flex-1 px-4 sm:px-6 lg:px-8'>
              <div className='flex flex-col sm:flex-row justify-between items-center mb-6'>
                <Title text1={"Our"} text2={" Collections"} className="mb-4 sm:mb-0" />
                <select 
                  className='w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                  onChange={(e) => setSortType(e.target.value)}>
                  <option value="relevant">Sort by: Relevant</option>
                  <option value="asc">Price: Low to High</option>
                  <option value="desc">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
              
              {/* Search Bar */}
              <div className="mb-6">
                <Search searchQuery={searchitem} setSearchQuery={setSearchItem} />
              </div>

              {/* Show filtered count */}
              <div className=" mb-6">
                <div className='flex justify-between items-center'>
                <p className='text-gray-600 text-sm'>
                  Showing <span className="font-semibold">{filterProducts.length}</span> of <span className="font-semibold">{products.length}</span> results
                </p>
                <div className="flex items-center mt-2">
                  <label htmlFor="productsPerPage" className="mr-2 text-sm text-gray-600">Products per page:</label>
                  <select
                    id="productsPerPage"
                    className="px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={productsPerPage}
                    onChange={(e) => {
                        setProductsPerPage(Number(e.target.value));
                        setCurrentPage(1); // Reset to first page when changing items per page
                    }}
                    >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
                </div>
                <div className='h-1 w-full bg-blue-600 mt-2'></div>
              </div>

              {/* Rendering products */}
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8'>
                {currentProducts.map((product, index) => (
                  <ProductItem 
                    key={index} 
                    id={product._id} 
                    name={product.name} 
                    image={product.image} 
                    price={product.price}
                    sizes={Array.isArray(product.sizes) ? product.sizes : []}
                    description={product.description}
                    isBestseller={product.bestseller}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className='flex justify-center items-center space-x-2'>
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className='px-4 py-2 text-sm text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 transition duration-150 ease-in-out disabled:opacity-50'>
                  Previous
                </button>
                {[...Array(totalPages).keys()].map((page) => (
                  <button 
                    key={page + 1} 
                    onClick={() => setCurrentPage(page + 1)}
                    className={`px-4 py-2 text-sm ${currentPage === page + 1 ? 'bg-blue-600 text-white' : 'text-gray-600 bg-white'} border border-gray-300 rounded-md hover:bg-gray-50 transition duration-150 ease-in-out`}>
                    {page + 1}
                  </button>
                ))}
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className='px-4 py-2 text-sm text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 transition duration-150 ease-in-out disabled:opacity-50'>
                  Next
                </button>
              </div>
            </div>

        </div>
      )
}

export default Collection
