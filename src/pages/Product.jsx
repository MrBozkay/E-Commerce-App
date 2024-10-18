import { useState} from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import RelatedProducts from '../components/RelatedProducts'


const Product = () => {

  const {products,currency,addToCart}= useShopContext()
  const {productId}= useParams()
  const [proData,setProData] = useState(false)
  const [coverimg,setCoverImg] = useState()
  const [size,setSize] = useState(null)
  const [activetab,setActiveTab] = useState("review")
  const [quantity,setQuantity] = useState(1)

  const sizeref = useRef({
    s:null,
    m:null,
    l:null,
    xl:null
  })

  
  // console.log("productid",productId)

  const fetchProduct = async ()=> {
    try {
      if(productId){
        // console.log("products", products)
        if(products.length>0){
          // console.log("product id", productId)
          const prod = products.filter(product => product._id === productId )
          // console.log("prod", prod)
          setProData(prod[0])  
          // console.log("prodata", proData)
          setCoverImg(prod[0].image)
          setSize(prod[0].size)

          // console.log("coverimg", coverimg)
        
        }
        
      }
      
     
    } catch (error) {
      console.log(error)
    }
  }

  const handleCart = function(data,size,quantity){

    // console.log("data", data, "size", size, "quantity", quantity,"refbutton",sizeref.current)

    if (sizeref.current[size] && size) {
      addToCart(data, size, quantity)
    }
    else{
      alert("Please select a size")
      console.log("sizref current :",sizeref.current )
      Object.values(sizeref.current).forEach(btn => {
      if (btn) {
        btn.className="border border-2 px-2 py-1 bg-red-200 text-white rounded-md border-orange-600 "
        
      }
      })

      setTimeout(() => {

      Object.values(sizeref.current).forEach(btn => {
          if (btn) {
            btn.className="border border-gray-400 px-2 py-1 cursor-pointer rounded-md"
          }
      
       })
      }, 2000)

    }

  }

  useEffect(()=>{
    fetchProduct()
    // console.log("mounting", proData)
    return () => {
      // console.log("unmounting",proData)
    }
  },[productId,products])


  return proData ? (
    <div className='block'>
      {/* PRODUCT DATA */}
      <div className='flex border-t-2  mt-10 pt-10 pl-0 pb-10 flex-col items-center sm:gap-10  gap-10 md:gap-6 sm:flex-row'>
        {/* PRODUCT LEFT SIDE */}
        <div className='min-w-[25rem] flex flex-col cursor-zoom-in' >
            {/* COVER IMAGES */}
          <div className='flex   '>

              <img className='w-full h-auto' src={coverimg[0]} 

               alt="" />
                  
          </div>
          {/* IMAGE GALLERY */}
          <div className='flex w-[15%]'>
              
                
                {
                    proData.image?.map((img,index) => {
                      return (  
                        
                        <img key={index} className='m-2 cursor-pointer' 
                        onClick={()=> setCoverImg([img])} src={img} alt="" />
                        
                      )
                    }
                  )
                   
                  

                }
                
          </div>

         </div>
         

          {/* PRODUCTt RİGHT SİDE */}
        <div className=' flex flex-col '>
         
          <h1 className='text-2xl font-medium mt-2'>{proData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_dull_icon} alt="" />
            <p className='text-sm text-gray-500'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{proData.price}</p>
          <p className='text-sm mt-5 text-gray-600 md:w-4/5 '>{proData.description}</p>
          {/* SIZE SELECTOR */}
          <div className='flex flex-col gap-4 my-8' >
            <p >Select Size</p>
            <div className='flex  gap-2'>
              {
                proData.sizes?.map((item,index)=> {
                  return (
                    <button ref={(e) => sizeref.current[item] = e}
                     onClick={()=> setSize(item)}
                     key={index} 
                     value={item}
                     className={` border border-gray-400 px-2 py-1 cursor-pointer rounded-md  ${item== size ? "bg-orange-400 text-white border-orange-600" :""}`}>
                      {item}
                    </button>
                  )
                })
              }
              </div>
              <div className="mt-2" >

              <p className="text-xs" >
                Most users recommend buying 1 size larger.
              </p>

              </div>
            
          </div>
          {/* ADD TO CART AND BUY NOW BUTTONS */}
          <div className='flex flex-col gap-4'>
            <div className='flex gap-4 items-center'>
              <button onClick={()=> quantity>0 ? setQuantity(quantity-1): setQuantity(0)} className='border border-gray-400 px-2 py-1 rounded-md'>-</button>
              <p>{quantity}</p>
              <button onClick={()=> setQuantity(quantity+1)} className='border border-gray-400 px-2 py-1 rounded-md '>+</button>
            </div>
          <button onClick={()=> {handleCart(proData?._id, size,quantity) } }
          className='bg-[#f27a1a] transition ease-in  text-white px-4 py-2 rounded-md'>Add to Cart</button>
          </div>
          <hr className="mt-8 sm:w-4/5"/>

          {/* PRODUCT DETAILS */}
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1 ">

              <p>100% orginal productis built with organic materials </p>
              <p> Cash on delivery might be available</p>
              <p>Easy return and delivery Policy is available </p>
      
          
          </div>
        </div>
      </div>

          {/* PRODUCT REVIEWS  and Details */}
          {/* create a tab seciton for reviews ant product detials  */}


          <div className="mt-15 flex-grow " >
            <div className="flex flex-row border-b  border-gray-200">
              <ul className =" flex flex-wrap  -mb-px text-sm font-medium text-center  ">
                <li className="me-2">
                  <a onClick={
                    ()=> setActiveTab("review")
                  }
                    className={`inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-500 hover:bg-blue-100 ${activetab=="review" ? "bg-blue-50" :""}`}>
                     <p className="  py-3 px-3 text-sm uppercase   ">REVIEWS ( {proData.reviews.length} )</p>
          
                  </a>
                </li>
                <li className="me-2">
                  <a onClick={
                    ()=> setActiveTab("productdetails")
                  } className={`inline-block p-2 border-b-2 border-transparent rounded-t-lg  hover:text-gray-600 hover:border-gray-500 hover:bg-blue-100 ${activetab=="productdetails" ? "bg-blue-50" :""}`}>
                     <p className="  py-3 px-3 text-sm uppercase  ">PRODUCT DETAILS</p>
                  </a>
                </li>

              </ul>
            </div>

          </div>
            
            {/* PRODUCT REVIEWS  */}
          <div className={`flex flex-col gap-5 mt-10 ${ activetab=="review" ? "" :" hidden"}`}>
            {
              proData.reviews?.map((review, index)=> {
                return (
                  <div  key={index} className="flex items-start ">
                  <div className="flex-shrink-0">
                    <div className="inline-block relative">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://picsum.photos/id/646/200/200" alt="Profile picture" />
                        <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>

                      </div>
                      <svg className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-4 h-4 -mx-1 -my-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6">
               
                    <p className="flex items-baseline">
                      <span className="text-gray-600 font-bold">{review.user}</span>
                      <span className="ml-2 text-green-600 text-xs">Verified User</span>
                    </p>
                    <div className="flex items-center mt-1">
                      {
                       Array.from({ length: review.rating }, (_, i) => (
                        <svg key={i} className="w-3 h-3 fill-current text-yellow-600" xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                      ))
                    }
                    {
                      Array.from({ length: 5 - review.rating }, (_, i) => (
                        <svg key={i} className="w-3 h-3 fill-current text-gray-400" xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                      ))
                    }
                      </div>
                    <div className="flex items-center mt-2 text-gray-600">
                      <div className="flex items-center justify-center ">
                        <span className="text-sm">Product Quality</span>
                        <div className="flex items-center ml-2">
                           {
                       Array.from({ length: review.rating }, (_, i) => (
                        <svg key={i} className="w-3 h-3 fill-current text-yellow-600" xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                      ))
                      }
                      {
                        Array.from({ length: Math.round(5 - review.rating) }, (_, i) => (
                          <svg key={i} className="w-3 h-3 fill-current text-gray-400" xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                        ))
                      } 
                        </div>

                      </div>
                     
                    </div>
                    <div className="mt-3">
                      <span className="font-bold sm:font-semibold">Very Good</span>
                      <p className="mt-1 text-wrap">{review.comment}</p>
                    </div>
                    <div className="flex items-center flex-col mt-4 text-sm text-gray-600 fill-
                    ">
                      <div className="flex items-center flex-wrap">
                        <span>Was this review helplful?</span>
                        <div className="flex flex-row ml-3 mr-4">
                          <button className="flex items-center  ">
                          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z"/></svg>
                          <span className="ml-2">56</span>
                        </button>
                        <button className="flex items-center ml-3">
                          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z"/></svg>
                          <span className="ml-2">10</span>
                        </button>
                        </div>
                      <button className="flex items-center sm:mt-5 ">
                        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z"/></svg>
                        <span className="ml-2">Share</span>
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
                )
              })
            }

          </div>

          {/* Product Details  */}
        <div className={`flex flex-col gap-5 mt-10 ${ activetab=="productdetails" ? "" :" hidden"}`} >
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Product Details</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>

        </div>

        {/* Related products Sections */}
        <RelatedProducts category={proData?.category} subCategory={proData?.subCategory} />
          

    </div>
  )
  
  :

  (
    <div className="flex flex-row w-11 text-center text-3xl">Loading...</div>
  )
}

export default Product
