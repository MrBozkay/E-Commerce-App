import React from 'react'
import {assets} from '../assets/frontend_assets/assets';


const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm  md:text-base text-gray-600 '>
      { /* Exchange policy  */}
      <div >
        <img className="w-10  m-auto mb-5" src={assets.exchange_icon} alt="" />
        <p className="font-semibold capitalize">easy exchange Policy</p>
        <p className="text-gray-500"> We offer hassle free exchange policy</p>
      </div>
      { /* Quality policy  */}

      <div>
        <img className="w-10  m-auto mb-5" src={assets.quality_icon} alt="" />
        <p className="font-semibold capitalize"> 30 days quality guarantee</p>
        <p className="text-gray-500"> No quality issue for 30 days</p>
      </div>
      { /* Return policy  */}

      <div>
        <img className="w-10  m-auto mb-5" src={assets.return_icon} alt="" />
        <p className="font-semibold capitalize">Free Return</p>
        <p className="text-gray-500">Free return for 7 days</p>
      </div>
      { /* Secure payment  */}  

      <div>
        <img className="w-10  m-auto mb-5" src={assets.secure_icon} alt="" />
        <p className="font-semibold capitalize">Secure Payment</p>
        <p className="text-gray-500">We offer secure payment</p>
      </div>

      { /* Support policy  */}
      <div>
        <img className="w-10  m-auto mb-5" src={assets.support_img} alt="" />
        <p className="font-semibold capitalize"> Support Policy</p>
        <p className="text-gray-500"> We provide 24/7 customer support </p>
      </div>
    
      
    </div>

  )
}

export default OurPolicy
