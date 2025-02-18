import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Account = () => {
  return (
    <div>
      <section className="relative h-[60vh] bg-cover bg-center bg-shop-bg">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-bold"></h1>
          <p className="text-xl mt-4">
            <Link href="/">Home</Link> &gt; My Account
          </p>
        </div>
      </section>
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold ">Login</h1>
              <form className="space-y-4">
                <div>
                  <label className="block text-lg font-semibold" htmlFor="email">Username or Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold" htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="rememberMe" className="mr-2" />
                  <label htmlFor="rememberMe" className="text-lg">Remember Me</label>
                </div>
                <button className="w-10000 py-2 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition">
                  Login
                </button>
                <div className="text-center mt-4">
                  <Link href="#" className="text-lg text-blue-600">Lost your password?</Link>
                </div>
              </form>
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Register</h1>
              <form className="space-y-4">
                <div>
                  <label className="block text-lg font-semibold" htmlFor="registerEmail">Email Address</label>
                  <input
                    type="email"
                    id="registerEmail"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    A link to set a new password will be sent to your email address.
                  </p>
                  <p>
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                  </p>
                </div>
                <button className="w-100 py-4 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 text-black py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <h2 className="text-black font-bold text-3xl">Free Delivery</h2>
              <p className="text-lg text-gray-700">For all orders over $50, consectetur adipim scing elit.</p>
            </div>
            <div className="text-center">
              <h2 className="text-black font-bold text-3xl">90 Days Return</h2>
              <p className="text-lg text-gray-700">If the product has an issue, consectetur adipim scing elit.</p>
            </div>
            <div className="text-center">
              <h2 className="text-black font-bold text-3xl">Secure Payments</h2>
              <p className="text-lg text-gray-700">100% secure payments, consectetur adipim scing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Account