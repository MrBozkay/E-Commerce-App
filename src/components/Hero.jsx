import React from 'react'
import { assets} from '../assets/frontend_assets/assets'


const Hero = () => {
  return (
     <div className=' flex flex-col sm:flex-row border border-gray-400' >
        {/* {hero lesft side} */}
        <div className='w-full sm:w-1/2 flex items-center justify-center  py-10 sm:py-0'>

            <div className='text-[#315d5d]'>
                <div className='flex items-center gap-2'>

            <p className="w-8 md:w-11 h-[3px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base uppercase"> our bestsellers</p>
                </div>
                <h1 className=' prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed uppercase'> latest Arrivals</h1>
                <div className='flex items-center gap-2'>

            <p className="font-semibold text-sm md:text-base uppercase"> shop now</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414142]"></p>
            

                </div>
            <div>
        </div>
        </div>

        </div>
        {/* {hero right side} */}
        <div className='w-full sm:w-1/2  flex justify-center md:justify-end '>

            <img className='w-full' src={assets.sale_shopping} alt='hero img' />
    </div>
    </div>
  )
}

export default Hero
