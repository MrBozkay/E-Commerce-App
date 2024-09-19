import { useEffect, useState } from "react"
import { ShopContext} from "../context/ShopContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const RelatedProducts = ({category,subcategory}) => {

  const {products,currency} = useContext(ShopContext)
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(()=>{
    let filteredProducts = products.filter((product)=> product.category === category && product.subcategory === subcategory)
    let [_,...filteredProduct]= filteredProducts;
    setRelatedProducts(filteredProduct)
  },[])


  return (
    <div className="w-full mt-5 py-5">
      <h2 className="text-2xl font-medium">Related Products</h2>
      <hr className="mb-10 mt-2" />

      <div className="flex flex-wrap gap-3 justify-center overflow-y-auto">
        {
          relatedProducts?.map((product, index) => (
            <div key={index} className=" w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6  overflow-hidden">

            
            <Link to={`/product/${product._id}`} className="cursor-pointer text-stone-800">
              <div className="border-2 rounded-lg border-gray-300 bg-slate-100 p-5">
                <div className=" overflow-hidden">

                <img className="w-full h-auto  hover:scale-150 hover:rotate-12 ease-in-out transition-all" src={product.image[0]} alt="" />
              {/* Best Seller */
                product.bestseller && (
                  <span className="relative z-10  bottom-7 mb-[0px] right-0  m-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-lg">Best Seller</span>
                )}
              

                </div>
                <h3 className="mt-2 text-sm font-medium">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                <p className="mt-1 text-sm text-green-500"> {currency} {product.price}</p>
              </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default RelatedProducts