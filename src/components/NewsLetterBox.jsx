import React from 'react'

const NewsLetterBox = () => {
  const handlesubmit=(e)=>{
    e.preventDefault()
  }
  
  return (
    <div className='text-center text-pretty' >
      <p className='text-2xl font-medium text-gray-700 '>
        Sign up for our newsletter
      </p>
      <p className='mt-2 text-sm text-gray-500'>
        Be the first to know about new products and exclusive offers.
      </p>
      <form onSubmit={handlesubmit}
      className='w-full sm:w-1/2 flex items-center gap-4 mx-auto my-6 border rounded-md  pl-4 '>
        <input
          className=' w-full sm:flex-1 outline-none '
          type='email'
          placeholder='Enter your email'
        />
        <button 
        className=' bg-indigo-500 text-white p-4 uppercase  hover:bg-indigo-400'
        type='submit'>
          Subcribe
        </button>
      </form>
    </div>
  )
}

export default NewsLetterBox