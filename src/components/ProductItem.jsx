import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price, sizes, description, isBestseller }) => {
  const { currency, shopFee } = useContext(ShopContext)

  return (
    <Link 
      to={`/product/${id}`}
      className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out relative"
    >
      <div className="relative overflow-hidden aspect-w-1 aspect-h-1">
        <img 
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300 ease-in-out" 
          src={image[0]} 
          alt={name} 
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 ease-in-out flex items-center justify-center">
          <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <p className="text-sm mb-2">Sizes: {sizes.join(', ')}</p>
            <p className="text-xs">{description.slice(0, 50)}...</p>
          </div>
        </div>
        {isBestseller && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">
            Bestseller
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 truncate">{name}</h3>
        <p className="mt-1 text-lg font-semibold text-gray-900">
          {currency}{(price * shopFee).toFixed(2)}
        </p>
      </div>
    </Link>
  )
}

export default ProductItem
