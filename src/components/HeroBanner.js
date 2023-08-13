import React from 'react'
import Img from "./Img"

const HeroBanner = ({bg}) => {
  return (
    <div className='max-sm:h-[400px] w-full relative h-[90vh] '>
    <span className='absolute top-0 left-0 w-full h-[250px] bg-opacity-top rotate-180'></span>

    <div className='absolute w-full min-w-full h-full -z-10  object-center '>
    <Img src={bg} class="w-full h-full object-cover object-center blur-0 "/>
      {/* <img src={'https://image.tmdb.org/t/p/original'+bg} alt=''
        className='w-full h-full object-cover object-center  blur-[1px] shadow-inner '
      /> */}
    </div>
    <div className='flex flex-col gap-4 items-center justify-center h-full w-full  px-2 '>
    <div className='flex flex-col items-center gap-2 max-sm:min-w-full max-w-[500px] '>
      <h1 className='text-6xl font-bold text-white drop-shadow-2xl'>Welcome</h1>
      <p className='text-center text-white font-medium leading-6 text-xl max-sm:text-lg drop-shadow-2xl '>Millions of movies, TV shows and people to discover. Explore now.</p>
    </div>
    <div className='flex h-[40px] max-sm:min-w-full min-w-[500px] max-sm:px-4 z-30'>
      <input type='text' placeholder='search '
        className='focus:outline-none px-4 h-full  rounded-l-full w-full'
      /> 
      <button className=' bg-gradient text-white rounded-r-full px-2  duration-150 active:outline-none'>search</button>

    </div>

    </div>
    <span className='absolute bottom-0 left-0 w-full h-[250px] bg-opacity-bottom '></span>
    </div>
  )
}

export default HeroBanner