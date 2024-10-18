import React from 'react'
import { useShopContext } from '../context/ShopContext'
import { Link, useLocation } from 'react-router-dom'

const ProductItem = ({ id, image, name, price, sizes, description, isBestseller }) => {
  const { currency, shopFee } = useShopContext()
  const location = useLocation()
  const isCollectionPage = location.pathname === '/collection' || location.pathname === '/collection/'

  return (
    <Link 
      to={`/product/${id}`}
      className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out relative"
    >
      <div className="relative overflow-hidden aspect-w-1 aspect-h-1">
        <img 
          className="object-cover w-full h-full transform group-hover:scale-150 transition-transform duration-300 ease-in-out" 
          src={image[0]} 
          alt={name} 
        />
        {isCollectionPage && (
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 ease-in-out flex items-center justify-center">
            <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <p className="text-sm mb-2">Sizes: {sizes?.join(', ')}</p>
              <p className="text-xs">{description?.slice(0, 50)}...</p>
            </div>
          </div>
        )}
        {isBestseller && (
          <div className="absolute top-6 left-2 bg-yellow-400 text-xs font-bold px-6 py-1 rotate-[-45deg] transform -translate-x-[30%] -translate-y-[40%] shadow-md">
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
