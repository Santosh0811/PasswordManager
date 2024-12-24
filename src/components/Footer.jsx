import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
      <div className="logo font-bold text-2xl">
                    <span className="text-purple-500">&lt;</span>
                    Password
                    <span className="text-purple-500">Manager /&gt;</span>
                </div>
      <div>
        Created with <i className="fa-solid fa-heart"></i> by Santosh Vishwakarma
      </div>
    </div>
  )
}

export default Footer
