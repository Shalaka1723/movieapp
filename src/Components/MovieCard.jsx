import React from 'react'
import smith from '../assets/smith.jpg'

const MovieCard = () => {
  return (
    <>
      <div id='mainCard' className='rounded-lg shadow-lg bg-purple-950 relative w-fit overflow-hidden '>
        <img src={smith} />
        <div id='title' className=' text-white p-2 px-4'>
            <h3 className='text-lg' >Mr. & Mrs. Smith </h3> 
        </div>
        <div id='info' className='absolute opacity-30 transition-all ease-in-out overflow-y-auto p-4 text-purple-300 '>
            <h1 className='font-bold text-lg '>More Info</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorem expedita nulla hic necessitatibus aspernatur repudiandae cumque beatae quae nam iusto facilis nesciunt quia incidunt repellat, recusandae voluptate enim explicabo.
            </p>

        </div>

      </div>
    </>
  )
}

export default MovieCard
