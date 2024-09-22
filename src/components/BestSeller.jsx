import { useEffect } from 'react'

import { useState } from 'react'
import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const BestSeller = () => {
  
   const{products} =useContext(ShopContext)
   const [bestseller,setBestseller] =useState([])

   useEffect(()=>{
    const bestproduct = products.filter((product) => (product.bestseller));
    setBestseller(bestproduct);

    },[products]);
  
    return (
       
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={"best"} text2={" Sellers"} />

        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque justo id enim vestibulum, at tempus velit dignissim. Nulla facilisi. Integer ut orci vel ipsum placerat maximus. In consectetur purus et felis viverra, in consectetur nunc gravida.
        </p>

        </div>
    {/* rendering Best Seller Products */}
    

     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 '>
        {bestseller.map((product, index) => (
            <ProductItem key = {index} id={product._id} name={product.name} image={product.image} price={product.price} />
        ))}
    </div>
    </div>
  )

}


export default BestSeller
