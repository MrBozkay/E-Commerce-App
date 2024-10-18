import React from 'react'

const CartTotal = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Cart Total</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>$99.99</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span>$10.00</span>
        </div>
        <div className="flex justify-between">
          <span>Tax:</span>
          <span>$8.00</span>
        </div>
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>$117.99</span>
          </div>
        </div>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700 transition duration-300 ease-in-out">
        Proceed to Checkout
      </button>
    </div>
  )
}

export default CartTotal
