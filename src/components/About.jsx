import React from 'react'

function About() {
  return (
    <div name="about" className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <div>
                <p className='text-xl mt-2'>
                    I am learning Front-end Developer. I can work well as a team. and am always ready to learn new things. I am lookink for a pasttime Front-end developer.
                </p>
                <br />
                <p className='text-xl'>
                    <ul >
                        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>EDUCATION</p>
                        <li className='text-xl mb-1 mt-10 '>Vocational Certificate Military Technical Taining School | 2016 - 2018</li>
                        <li className='text-xl '>Electronics</li>
                        <li className='text-xl mb-1 mt-4'>High Vocational  Certificate Donmueang Technical College | 2019 - 220</li>
                        <li className='text-xl'>Electrical engineering</li>
                        <li className='text-xl mb-1 mt-4'>Bachelor's degree  Donmueang Technical College | 2021- NOW PRESENT</li>
                        <li className='text-xl'>Bachelor of Technology</li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
  )
}

export default About