
import { useContext } from 'react'
import { useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useState } from 'react'
import { useRef } from 'react'
import {assets} from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import Search from '../components/Search'

const Collection = () => {

    const {products,showSearch,setShowSearch,searchitem,setSearchItem}= useContext(ShopContext)
    const [showfilter, setShowfilter]=useState(true)
    const [filterProducts, setFilterProducts]=useState([]);
    const [category, setCategory]=useState([]);
    const [subCategory, setSubCategory]=useState([]);
    const [sortType, setSortType]=useState('relavent');

    const CATEGORY = [

        "Men",
        "Women",
        "Kids",
    ]

    const SUBCATEGORY = [

        
        "Topwear",
        "Bottomwear",
        "Winterwear",
        "Dresswear",
        "Footwear",
        "Accessories",
        "Summerwear",
    ]



    const toggleCategory =(e) => {


        console.log("selected category : " + e.target.value);
        
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
    



 /*    // test filter
    const testp=[-100,-50,10,100,20,30,40]
    console.log(sortP(testp,"asc")) */



    const sortProducts = ()=>{
        let fpro=filterProducts.slice()
        let stype=sortType
        
        if(stype!=="relavent"){
            fpro=sortP(fpro, stype)
        }
        else 
        {
           applyFilters()
        }

        setFilterProducts(fpro)

    }



    const applyFilters=() => {

        console.log("category state : " + category);
        
        let filterProduct=products.slice()

        if (showSearch && searchitem.length>0) {
            filterProduct=filterProduct.filter((product)=>product.name.toLowerCase().includes(searchitem.toLowerCase()))
            console.log("search: ",searchitem)

        }
        if(category.length>0){
            setFilterProducts(filterProduct.filter(product=>category.includes(product.category)))
        }

        if(subCategory.length>0){

            setFilterProducts((fPro)=>fPro.filter((product)=>subCategory.includes(product.subCategory)))
            
        }
        if(category.length==0){

            if(subCategory.length==0){
                setFilterProducts(filterProduct)
            }
            else{
                setFilterProducts(filterProduct.filter((product)=>subCategory.includes(product.subCategory)))
            }

        }
        
        console.log("filter product : " + filterProduct.length)
        console.log(" store product : " + products.length)
       
    }

    useEffect(()=>{
        sortProducts()
    },[sortType])


    
  

    useEffect(()=>{
        applyFilters()
    },[category, subCategory,searchitem])

    const handlefilter=()=>{
        setShowfilter(!showfilter)
    }

   
  return (
    <div className='-z-40 flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t' >

        {/* Left side  */}

        <div className=' min-w-52'>
            {/* filter options */}
            <p onClick={handlefilter} 
             className='my-2 text-xl flex items-center cursor-pointer gap-2 uppercase' >filters
             <img className={` h-3 sm:hidden  ${showfilter ? "" : "-rotate-90"}`} src={assets.arrow} alt=""/>
             </p>
            
            {/* Category Filter  */}
            <div className={` border border-gray-400 pl-3 py-3 mt-3 ${showfilter ? " " : "hidden"}`}>
                <p className='text-sm font-medium mb-3 capitalize'>category</p>
                <div className='flex flex-col gap-1 text-sm font-light text-gray-500'>
                    {
                        CATEGORY.map((item,index)=> {
                            return (
                                <p key={index} 
                                className='flex gap-2 cursor-pointer '>
                                    <input className='w-3 capitalize' onChange={toggleCategory} type="checkbox" value={item.toLowerCase()}/>
                                    {item}

                                </p>
                            )
                        })
                        
                    }
                        
                
                </div>
            </div>

            {/* SubCategory Filter  */}
            <div className={` border border-gray-400 pl-3 py-3 mt-3 ${showfilter ? " " : "hidden"}`}>
                <p className='text-sm font-medium mb-3 capitalize'>type</p>
                <div className='flex flex-col gap-1 text-sm font-light text-gray-500'>
                    
                    {
                        SUBCATEGORY.map((item, index)=> {
                            return (
                                <p key={index} 
                                className='flex gap-2 cursor-pointer '>
                                    <input className='w-3 capitalize' onChange={toggleSubCategory} type="checkbox" value={item.toLowerCase()}/>
                                    {item}

                                </p>
                            )
                        })
                    }
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
