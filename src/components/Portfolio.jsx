import React from 'react'
import shop from '../image/portfolio/shop.png'
import calc from '../image/portfolio/calculator.png'

function Portfolio() {
  const portfolio = [{
    id: 1,
    src: shop
  },{
    id: 2,
    src: calc
  }];

  return (
    <div name='portfolio' className=' w-full md:h-screen bg-gradient-to-b to-gray-800 from-black text-white '>
      <div className='max-w-screen-lg p-10 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>
      
        <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolio.map(({id, src}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 '/>
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio