import React from 'react'
import Navbar from './Navbar'
import MovieCard from './MovieCard'

const MovieApp = () => {
  return (
    <> 
    <div className='bg-black h-screen'>
      <Navbar/>
      <MovieCard/>

    </div>
    </>
  )
}

export default MovieApp
