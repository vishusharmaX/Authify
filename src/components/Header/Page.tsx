import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between m-4 sm:m-[2vh] items-center">
        <nav className="text-center">
          <h1 className="text-3xl sm:text-3xl  sm:text-underline ttext-zinc-900 font-bold capitalize decoration-dashed underline" >
            <Link href="/">
              Authify
            </Link>
          </h1>
        </nav>
        <div className="flex justify-center sm:justify-end gap-4 mt-4 sm:mt-0">
          <Link href="/signup">
            <button className="inline-flex h-10 sm:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-gradient-to-r from-slate-800 via-black to-slate-800 px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              SignUp
            </button>
          </Link>
          <Link href="/login">
            <button className="shadow-[0 4px 14px 0 rgba(0, 118, 255, 0.39)] hover:shadow-[0 6px 20px rgba(0, 118, 255, 0.23)] hover:bg-[rgba(0, 118, 255, 0.9)] px-6 py-2 sm:px-8 sm:py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
