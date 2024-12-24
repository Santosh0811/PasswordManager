import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
                <div className="logo font-bold text-xl">
                    <span className="text-purple-500">&lt;</span>
                    Password
                    <span className='ml-1'>
                        <i className="fa-solid fa-key"></i>
                    </span>
                    <span className="text-purple-500 ml-1">Manager /&gt;</span>
                </div>
                {/* <ul>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold' href="/">Home</a>
                        <a className='hover:font-bold' href="/">Contact</a>
                        <a className='hover:font-bold' href="/">About</a>
                    </li>

                </ul> */}
                <button className='bg-purple-400 rounded-full px-2 py-1 flex justify-center gap-1 ring-white ring-2'>
                    <i className="fa-brands fa-github text-xl"></i>
                    GitHub
                </button>
            </div>
        </nav>
    )
}

export default Navbar
