import React from 'react'
import ba from './34.jpg'

function Banner() {
  return (
    <div className='max-w-screen-2xl container mx-0 my-2 flex flex-col md:flex-row '>
        <div className='w-80 bg-slate-400 text-left md:w-l/2'>
        <h1 className='text-3xl text-wrap text-center text-red-700'>Mid Left</h1>
        </div>
        <div className='w-80 bg-zinc-300 text-left md:w-l/2'> <img src={ba} className='w-80 h-80' />
        </div>
    </div>
  )
}

export default Banner