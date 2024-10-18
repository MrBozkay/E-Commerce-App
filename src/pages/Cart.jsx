import React from 'react'
import CartTotal from '../components/CartTotal'
import Title from '../components/Title'
const Cart = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Title text1="Your Shopping Cart" text2="Check out the products you want to buy" />
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left font-semibold">Product</th>
              <th className="text-left font-semibold">Price</th>
              <th className="text-left font-semibold">Quantity</th>
              <th className="text-left font-semibold">Total</th>
            </tr>
          </thead>
          <tbody>
            {/* Example product row, repeat for each item */}
            <tr className="border-b">
              <td className="py-4">
                <div className="flex items-center">
                  <img className="h-16 w-16 mr-4" src="/path-to-product-image.jpg" alt="Product" />
                  <span className="font-semibold">Product Name</span>
                </div>
              </td>
              <td className="py-4">$19.99</td>
              <td className="py-4">
                <div className="flex items-center">
                  <button className="border rounded-md py-2 px-4 mr-2">-</button>
                  <span className="text-center w-8">1</span>
                  <button className="border rounded-md py-2 px-4 ml-2">+</button>
                </div>
              </td>
              <td className="py-4">$19.99</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <CartTotal />
      </div>
    </div>
  )
}

export default Cart
