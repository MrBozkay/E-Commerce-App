import React from 'react'

const Error = () => {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800 animate-ping">
          404
        </h1>
        <h2 className="text-4xl font-semibold text-gray-600 mt-4 mb-8 animate-pulse">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="animate-spin inline-block w-16 h-16 border-4 border-gray-800 border-t-transparent rounded-full mb-8"></div>
        <div>
          <a
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  )
}
  export default Error;