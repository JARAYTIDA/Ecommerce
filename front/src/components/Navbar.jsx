import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdSearch} from 'react-icons/io'
import {FaShoppingCart, FaCaretDown} from 'react-icons/fa'

import {Darkmode} from '../components'

const MenuLinks = [
    {
        id: 1,
        name: 'Home',
        link: '#',
    },
    {
        id: 2,
        name: 'Shop',
        link: '#',
    },
    {
        id: 3,
        name: 'About',
        link: '#',
    },
    {
        id: 4,
        name: 'Contact',
        link: '#',
    },
]

const DropDownLinks = [
    {
        id: 1,
        name: 'Trending Products',
        link: '#',
    },
    {
        id: 2,
        name: 'Best Selling Products',
        link: '#',
    },
    {
        id: 3,
        name: 'Top Rated Products',
        link: '#',
    },
]

const Navbar = () => {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 '>
            <div className='py-4'>
                <div className="container flex justify-between items-center">
                    {/* Logo and Links */}
                    <div className='flex items-center gap-4'>
                        <Link to = '/' className='text-primary fonr-semibold tracking-widest text-2xl uppercase sm:text-3xl' >Eshop</Link>
                        {/* Meni Items */}
                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-4 '>
                                {
                                    MenuLinks.map((data, index) => (
                                        <li key = {index}>
                                            <Link className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200' to={`/${data.link}`}>{data.name}</Link>
                                        </li>
                                    ))
                                }

                                <li className='relative cursor-pointer group'>
                                    <Link to = '/' className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2 '>
                                        Quick Links
                                        <span> < FaCaretDown className='group-hover:rotate-180 duration-300' /> </span>
                                    </Link>
                                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md  dark:bg-gray-900 p-2 dark:text-white'>
                                        <ul className='space-y-2'>
                                            {DropDownLinks.map((data, index) => (
                                                <li key = {index}>
                                                    <Link className='text-gray-500 hover:text-black dark:hover:text-white duration-200 p-2 hover:bg-primary/20 inline-block w-full rounded-md' to = {`${data.link}`}>{data.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Navbar right section */}
                    <div className='flex justify-between items-center gap-4'>
                        {/* Search bar section */}
                        <div className='relative group hidden sm:block'>
                            <input type="text" placeholder='Search' className='search-bar' />
                            <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200' />
                        </div>
                        {/* Order button section */}
                        <button className='relative p-3'>
                            <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400'/>
                            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                                4
                            </div>
                        </button>
                        {/* Dark mode section */}
                        <div>
                            <Darkmode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar