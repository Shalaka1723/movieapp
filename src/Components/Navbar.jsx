import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <>
      <nav className=' bg-gray-950 text-white flex justify-between w-screen p-8'>
        <h1 className=' text-2xl font-bold '>Movies</h1>
        <ul className='flex gap-6 '>
            <li className='hover:underline'><a href='' > Home </a></li>
            <li className='hover:underline'><a href='' > Popular </a></li>
            <li className='hover:underline'><a href='' > Classics </a></li>
            <li className='hover:underline'><a href='' > Latest </a></li>
            <li> <input type='text' placeholder='Enter Movie Name' className='border-2 rounded-lg pl-2 mr-2'></input>
                <button> <SearchIcon/> </button> </li>
        </ul>
     
      </nav>
    </>
  )
}

export default Navbar
