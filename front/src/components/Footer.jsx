import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt} from 'react-icons/fa'

const FooterLinks = [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'About',
        link: '/',
    },
    {
        title: 'Contact',
        link: '/',
    },
    {
        title: 'Blog',
        link: '/',
    }
]

const Footer = () => {
    return (
        <div className=' bg-gray-200'>
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    <div className='py-8 px-4'>
                        <Link to = '/' className='text-primary fonr-semibold tracking-widest text-2xl uppercase sm:text-3xl' >Eshop</Link>
                        <p className='text-gray-600 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati assumenda ab exercitationem</p>
                        <p className='text-gray-600 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <Link className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'>
                            Shop Now
                        </Link>
                    </div>

                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='px-4 py-8'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key = {index}>
                                            <Link to={data.link} className='text-gray-500 hover:text-black duration-300'>{data.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className='px-4 py-8'>
                            <h1 className=' text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key = {index}>
                                            <Link to={data.link} className='text-gray-500 hover:text-black duration-300'>{data.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        
                        <div className='px-4 py-8 col-span-2 sm:col-auto '>
                            <h1 className='text-xl font-bold sm:text-left mb-3 '>Address</h1>
                            <div>
                                <div className='flex items-center gap-3 mt-6'>
                                    <FaLocationArrow />
                                    <p>IIT Bombay, Mumbai</p>
                                </div>
                                <div className='flex items-center gap-3 mt-6'>
                                    < FaMobileAlt />
                                    <p>+91 1234567890</p>
                                </div>
                                <div className='flex items-center gap-5 mt-6'>
                                    <Link className='text-3xl hover:text-primary duration-300'> < FaInstagram/> </Link>
                                    <Link className='text-3xl hover:text-brandBlue duration-300'> <FaFacebook/> </Link>
                                    <Link className='text-3xl hover:text-brandBlue duration-300'> < FaLinkedin/> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Footer