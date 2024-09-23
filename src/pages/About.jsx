import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
const About = () => {
  return (
  <div className=" px-4 py-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to our e-commerce platform, your number one source for all things fashion. We&apos;re dedicated to providing you the very best of products, with an emphasis on quality, customer service, and uniqueness.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Founded in 2021, our e-commerce platform has come a long way from its beginnings. When we first started out, our passion for eco-friendly and high-quality fashion drove us to start our own business.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        We now serve customers all over the world and are thrilled that we&apos;re able to turn our passion into our own website. We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don&apos;t hesitate to contact us.
      </p>
      <h2 className="text-3xl font-semibold text-center mb-4">Our Mission</h2>
      <p className="text-lg text-gray-700 mb-6">
        Our mission is to provide the best online shopping experience by offering a wide range of high-quality products, exceptional customer service, and a seamless shopping experience. We strive to make fashion accessible to everyone, while also promoting sustainability and ethical practices in the industry.
      </p>
      <h2 className="text-3xl font-semibold text-center mb-4">Our Team</h2>
      <p className="text-lg text-gray-700 mb-6">
        Our team is made up of passionate individuals who are dedicated to bringing you the best products and services. From our customer service representatives to our product curators, every member of our team plays a crucial role in ensuring that you have a positive shopping experience.
      </p>
      
      <div className="flex justify-center mb-8">
        <img src={assets.company_logo} alt="Company Logo" className="w-32 h-32" />
      </div>
      
    </div>
  </div>
  )
}

export default About
