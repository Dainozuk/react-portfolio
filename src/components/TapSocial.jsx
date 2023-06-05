import React from 'react'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {BsFileEarmarkPersonFill} from 'react-icons/bs'


function TapSocial() {
    const link = [
        {
            id: 1,
            child: (
                <>Linkedin<FaLinkedinIn size={20}/></>
            ),
            href: "https://www.linkedin.com/",
            style: "rounded-tr-md"
        },{
            id: 2,
            child: (
                <>Github<FaGithub size={20}/></>
            ),
            href: "https://github.com/Dainozuk",
        },{
            id: 3,
            child: (
                <>Mail<SiGmail size={20}/></>
            ),
            href: "https://www.linkedin.com/",
        },{
            id: 4,
            child: (
                <>Resume<BsFileEarmarkPersonFill size={20}/></>
            ),
            href: "/resume.pdf",
            download: true,
            style: "rounded-br-md"
        }
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {link.map (({id, child, href, style, download}) => (
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-700 hover:rounded-md duration-300 hover:ml-[-10px]' + " " + style}>
                    <a href={href}
                    className='flex justify-between items-center w-full text-white'
                    download={download}
                    target='_blank'>
                        {child}
                    </a>
                </li>
            ))}
            
        </ul>
    </div>
  )
}

export default TapSocial