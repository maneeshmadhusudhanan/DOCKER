import React from 'react'

const Navbar = () => {
  return (
   <>
        <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl">Recipe Sharing</h1>
            <div className="flex space-x-2">
                <a href="/signup" className="bg-white text-blue-500 rounded px-4 py-1">Signup</a>
                <a href="/login" className="bg-white text-blue-500 rounded px-4 py-1">Login</a>
            </div>
        </header>
   </>
  )
}

export default Navbar
