import React from 'react'
import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className=' border-t pt-5 pr-3 pb-2 mt-10'  >
    <div 
    className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr_1fr] gap-10 my-10 mx-3 text-sm' >
      <div>
        <img className='w-20 mb-5' src={assets.company_logo1} alt="" />
        <p className='w-full md:w-2/3 text-gray-500 '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptates, quibusdam  erat voluptate velit sed diam nonumy euismod 
        tempor incididunt ut labore et dolore magna aliqu  compliance et 
         
        </p>
      </div>

      <div className='flex flex-col gap-2'>
        <h3 className='font-semibold mb-5'>Company</h3>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Who We Are</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Delivery</li>
            <li>Terms & Conditions</li>
          
        </ul>
      </div>

      <div className='flex flex-col gap-2'>
        <h3 className='font-semibold mb-5'>Help</h3>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
        </ul>
      </div>

      <div className='flex flex-col gap-2'>
        <h3 className='font-semibold mb-5'>Contact</h3>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+90 545 5170775</li>
            <li>Email:info@example.com</li>
            
        </ul>
      </div>

      <div className='flex flex-col gap-2'>
        <h3 className='font-semibold mb-5'>Follow Us</h3>
        <ul className='flex  flex-col gap-4 text-gray-600'>
            <li className='flex ml-1'><img className='w-4 ' src={assets.linkedin_icon} alt="" />
             <span className='text-xs ml-2 mb-1'>
            LinkedIn</span></li>
            
            <li className='flex flex-1 ml-1'><img className='w-4 ' src={assets.twitter_icon} alt="" />
            <span className='text-xs ml-2 mb-1'>
              Twitter</span>

            </li>
            <li className='flex ml-1'><img className='w-4 ' src={assets.instagram_icon} alt="" />
            <span className='text-xs ml-2 mb-1'>
              Instagram</span>
            </li>
            <li className='flex ml-1'><img className='w-4 ' src={assets.facebook_icon} alt="" />
            <span className='text-xs ml-2 mb-1'>
              Facebook</span>
            </li>

            <li className='flex ml-1'><img className='w-4 ' src={assets.youtube_icon} alt="" />
            <span className='text-xs ml-2 mb-1'>
              Youtube</span>
            </li>
        </ul>
      </div>
    </div>
    {/* copyright and license */}
      <div className='w-full text-xs mb-2 text-center text-pretty' id='copyright'>
        <hr className='border-1 border-cyan-950 mb-2'/>&copy;
        Copyright 2024 - All rights reserved. Designed by <a href='https://mustafabozkaya.github.io' target='_blank'>MB</a>
      </div>

    </div>
  )
}

export default Footer