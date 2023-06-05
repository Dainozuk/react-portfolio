import React from 'react'
import html from '../image/HTML.png'
import css from '../image/css.png'
import javascript from '../image/javascript.png'
import reactImage from '../image/react.png'
import tailwind from '../image/tailwind.png'

function Skill() {
    const skills = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },{
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },{
            id: 3,
            src: javascript,
            title: "Javascript",
            style: "shadow-yellow-500"
        },{
            id: 4,
            src: reactImage,
            title: "React",
            style: "shadow-blue-700"
        },{
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400"
        },
    ]

  return (
    <div name="skill" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500  inline'>Skill</p>
                <p className='py-6'>These are skill I've worked with</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {skills.map(({id, src, title, style}) =>(
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Skill