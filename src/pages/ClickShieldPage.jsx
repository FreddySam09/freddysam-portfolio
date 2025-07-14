import React from 'react'
import mascotGif from '../assets/gifs/mascot-active.gif'

const ClickShieldPage = () => {
  return (
    <>
    <a
        href="/"
        className="fixed top-4 md:top-6 left-4 md:left-6 z-50 flex items-center gap-2 text-xs md:text-sm font-figtree text-darkgray px-3 md:px-4 py-1 md:py-2 rounded-full hover:text-dark hover:font-semibold transition-all duration-400"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 md:w-4 h-3 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Home
      </a>
    <div className='flex flex-row items-center justify-center text-dark mt-48'>
      <img src={mascotGif} alt="" className='w-32' />
      <div className='flex flex-col'>
      <p className='text-dark text-5xl font-sue mt-8'>OOPS <span className='text-niceorange'>!!?</span></p>
      <p className='text-dark text-xl font-sue mt-1'>The Page is under Construction</p>
      </div>
    </div>
    </>
  )
}

export default ClickShieldPage