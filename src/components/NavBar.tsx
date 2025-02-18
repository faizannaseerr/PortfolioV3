import React from 'react'

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center px-12 font-serif'>
            <button className='text-[#13315c] border-2 px-2 py-4 border-black'>Home</button>
            <button>Projects</button>
            <button>Contact</button>
        </nav>
    )
}

export default NavBar