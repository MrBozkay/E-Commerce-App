import { useEffect, useState, useContext } from "react"
import { useShopContext } from "../context/ShopContext"
import { Link } from "react-router-dom"

const RelatedProducts = ({ category, subcategory }) => {
  const { products, currency } = useShopContext()
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === category && product.subcategory === subcategory
    )
    const [_, ...filteredProduct] = filteredProducts
    setRelatedProducts(filteredProduct)
  }, [products, category, subcategory])

  return (
    <section className="w-full mt-8 py-6">
      <h2 className="text-3xl font-semibold mb-4">Related Products</h2>
      <hr className="mb-8" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {relatedProducts?.map((product) => (
          <Link
            key={product._id}
            to={`/product/${product._id}`}
            className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
                src={product.image[0]}
                alt={product.name}
              />
              {product.bestseller && (
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-0 left-0 w-full h-full  opacity-75"></div>
                  <span className="absolute top-1 left-1 px-2 py-1 text-xs font-bold text-white bg-red-500  rounded-full transform -rotate-0">
                    Best Seller
                  </span>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium truncate">{product.name}</h3>
              <p className="mt-1 text-xs text-gray-500 line-clamp-2">{product.description}</p>
              <p className="mt-2 text-sm font-semibold text-green-600">
                {currency} {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts