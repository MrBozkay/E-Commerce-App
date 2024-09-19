import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {

  const {currency,shopFee}= useContext(ShopContext)
  return (
    <div>
      <Link  className='cursor-pointer text-red-300 ' to={`/product/${id}`}>
      <div className='overflow-hidden'> 

        <img className='hover:scale-125 hover:rotate-12 ease-in-out transition-all ' src={image[0]} alt="" />

      </div>

        <p className='pt-4 pb-2 text-sm '>{name}</p>
        <p className=' text-sm font-medium'>
          {currency}{price * shopFee.toFixed(2)}
          </p>

      </Link>
    </div>
  )
}

export default ProductItem
