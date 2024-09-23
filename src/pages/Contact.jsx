import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
const Contact = () => {
  return (
  <div className="px-4 py-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        We would love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to provide feedback, feel free to reach out to us.
      </p>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea className="w-full px-4 py-2 border border-gray-300 rounded" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send Message</button>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Address:</strong> 123 Fashion Street, New York, NY 10001
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Email:</strong> support@eshopping.com
          </p>
          <h2 className="text-3xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.847374409374!2d-74.0059412845931!3d40.7127759793316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3168f9b1b1%3A0x4c5b1e0b1b1b1b1b!2s123%20Fashion%20Street%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>
      <div className="flex justify-center">
        <img src={assets.company_logo} alt="Company Logo" className="w-32 h-32" />
      </div>
    </div>
  </div>
  )
}

export default Contact
