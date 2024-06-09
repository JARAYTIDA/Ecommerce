import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

import Img1 from '../assets/hero/headphone.png'
import Img2 from '../assets/category/vr.png'
import Img3 from '../assets/category/macbook.png'
import HomeElementButton from './HomeElementButton'

const Data = [
    {
        id: 1,
        img: Img1,
        product: 'headphone',
        subtitle: 'Buy new',
        title: "Wireless",
        title2: "Headphones",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis optio assumenda doloribus quisquam recusandae quidem, maxime alias voluptate, debitis fugiat cumque unde vitae reprehenderit sed officiis fugit ex architecto eveniet.",
    },
    {
        id: 2,
        img: Img2,
        product: 'virtual',
        subtitle: 'Buy new',
        title: "Wireless",
        title2: "Virtual",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis optio assumenda doloribus quisquam recusandae quidem, maxime alias voluptate, debitis fugiat cumque unde vitae reprehenderit sed officiis fugit ex architecto eveniet.",
    },
    {
        id: 3,
        img: Img3,
        product: 'laptop',
        subtitle: 'Buy new',
        title: "Branded",
        title2: "Laptops",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis optio assumenda doloribus quisquam recusandae quidem, maxime alias voluptate, debitis fugiat cumque unde vitae reprehenderit sed officiis fugit ex architecto eveniet.",
    }
]

const HomeElement = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    return (
        <>
            <div className='container py-2 '>
                <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center'>
                    <div className='container pb-8 sm:pb-0'>
                        <Slider {...settings}>
                            {
                                Data.map((data) => (
                                    <div key = {data.id}>
                                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                                            {/* Text content Section */}
                                            <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 '>
                                                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>{data.subtitle}</h1>
                                                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                                                <h1 className='text-5xl uppercase text-black sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.title2}</h1>
                                                <div>
                                                    <Link to={`/products/${data.product}`}>
                                                        < HomeElementButton text='Shop Now' bgColor='bg-primary' textColor='text-white' />
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* Image Section */}

                                            <div className='order-1 sm:order-2'>
                                                <div>
                                                    <img src={`${data.img}`} alt="" className='h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40'/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeElement