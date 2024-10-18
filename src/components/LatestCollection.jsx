import React from 'react';
import { useState, useEffect} from 'react';
import { useShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const LatestCollection = () => {

    const {currency,shopFee,products} = useShopContext()
   
    const [latestProducts, setLatestProducts] = useState([]); // State to store latest products

    useEffect(() => {
        setLatestProducts(products.slice(0,10)); //
    }, [products]);



  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
        <Title text1={"Latest"} text2={" Collections"} />

        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque justo id enim vestibulum, at tempus velit dignissim. Nulla facilisi. Integer ut orci vel ipsum placerat maximus. In consectetur purus et felis viverra, in consectetur nunc gravida.
        </p>

        </div>

        {/* rendering Products */}
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 '>
        {latestProducts.map((product, index) => (
            // In a real-world scenario, you'd likely use a ProductItem component here

            <ProductItem key = {index} id={product._id} name={product.name} image={product.image} price={product.price} />
            // <div key={index} className='flex flex-col items-center justify-center'>
            //     <img src={product.image} alt={product.name} className='w-32 h-32 object-cover mb-2' />
            //     <p className='text-sm font-semibold'>{product.name}</p>
            //     <p className='text-gray-600'>{currency}{(product.price * shopFee).toFixed(2)}</p>
            // </div>
        ))}
       </div>
      
    </div>
  )
}

export default LatestCollection



