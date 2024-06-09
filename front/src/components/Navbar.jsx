import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {IoMdSearch} from 'react-icons/io'
import {FaShoppingCart, FaCaretDown, FaRegUser} from 'react-icons/fa'

// import {Darkmode} from '../components'

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
    const email = window.localStorage.getItem('email_id');
    const [showCount, setshowCount] = useState(false);
    const [count, setcount] = useState(0)
    useEffect(() => {
        if(email === null || email === undefined){
            setshowCount(false);
        }
        else{
            getCartData();
        }
    }, [])

    
    
    const getCartData = async () => {
            try {
                const response = await fetch(`https://ecommerce-295o.onrender.com/auth/cart-size?email=${email}`);
                if (response.ok) {
                    const data = await response.json();
                    console.log(data); // Response from the server
                    setcount(data.count);
                    setshowCount(true);
                } else {
                    console.error('Failed to submit form');
                    setshowCount(false);
                }
            } catch (error) {
                console.error('Error:', error);
                setshowCount(false);
            }
    }
    // getCartData();
    // useEffect(async (event) => {
    //     event.preventDefault();
    // }, [cnt])
    
    const [search, setsearch] = useState('')
    return (
        <div className='bg-white  duration-200 relative z-40 '>
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
                                            <Link className='inline-block px-4 font-semibold text-gray-500 hover:text-black  duration-200' to={`/${data.link}`}>{data.name}</Link>
                                        </li>
                                    ))
                                }

                                <li className='relative cursor-pointer group'>
                                    <Link to = '/' className='flex items-center gap-[2px] font-semibold text-gray-500  py-2 '>
                                        Quick Links
                                        <span> < FaCaretDown className='group-hover:rotate-180 duration-300' /> </span>
                                    </Link>
                                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md  p-2 '>
                                        <ul className='space-y-2'>
                                            {DropDownLinks.map((data, index) => (
                                                <li key = {index}>
                                                    <Link className='text-gray-500 hover:text-black  duration-200 p-2 inline-block w-full rounded-md' to = {`${data.link}`}>{data.name}</Link>
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
                            <input type="text" placeholder='Search' style={{border:'none', outline:'none'}} onChange={(e) => setsearch(e.target.value)} />
                            <Link to={`/products/${search}`}>
                                <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 duration-200' />
                            </Link>
                        </div>
                        {/* Order button section */}
                        <button className='relative p-3'>
                            <Link to='/cart'>
                                <FaShoppingCart className='text-xl text-gray-600 '/>
                            </Link>
                            {showCount && <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                                {count}
                            </div>}
                        </button>
                        {/* Dark mode section */}
                        <div className='text-xl p-3'>
                            <Link to='/profile'>
                                < FaRegUser />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar