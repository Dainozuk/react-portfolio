import React from 'react'
import HeroImage from '../image/profile.jpg'
import { BiRightArrow } from "react-icons/bi"
import {Link} from 'react-scroll'

function Home() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col h-full justify-center'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Frontend Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I'm junior of building and desgining web.
            I love to work on web using technologies like
            Javascript, React, Tailwind CSS.
          </p>

          <div>
            <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-400 to-red-300'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
              <BiRightArrow size={20} className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my profile" 
          className='mx-auto rounded-2xl w-2/3 md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home