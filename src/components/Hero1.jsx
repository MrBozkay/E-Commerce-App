import React from 'react'

const Hero1 = () => {
  return (
    <main className="bg-gradient-to-tr from-white-50 to-stone-50 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <span className="block w-20 h-2 bg-white mb-6"></span>
            <h1 className="font-bold uppercase text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-4">
              Shopping
              <span className="block text-yellow-300">Time</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-800 mb-8 max-w-xl">
              Discover a world of endless possibilities at your fingertips. Our curated collection brings you the latest trends, timeless classics, and everything in between.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="btn btn-primary">
                Shop Now
              </a>
              <a href="#" className="btn btn-primary">
                New Arrivals
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="./src/assets/frontend_assets/seasonal-sale-shopping.png" 
              alt="Shopping Time"
              className="w-full max-w-lg mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero1
