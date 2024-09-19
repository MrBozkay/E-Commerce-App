import React from 'react'

// eslint-disable-next-line react/prop-types
const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>

      <p className=' text-gray-500 uppercase'>
        {text1} 
        <span className='text-gray-700 font-medium '> 
         {text2}
        </span>
        </p>
      <p className='w-10 sm:w-11 h-[1px] sm:h-[-2px] bg-[#181819]'></p>
      
    </div>
  )
}

export default Title