import React from 'react'
import HomeElementButton from './HomeElementButton'
import { Link } from 'react-router-dom'

const ProductCard = ({data}) => {
  return (
    <div className='mb-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
            {data.map((data) => (
                <div className='group' key = {data.id}>
                    <div className='relative'>
                        <img src={data.img} alt="" className='h-[180px] w-[260px] object-cover rounded-md'/>
                        <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200'>
                            <Link to={`${data.link}`}>
                                <HomeElementButton text={"Shop now"} bgColor={'bg-primary'} textColor={'text-white'}/>
                            </Link>
                        </div>
                    </div>
                    <div className='landing-7'>
                        <h1 className='text-xl font-semibold '>{data.title}</h1>
                        <h2 className='font-bold '>{data.price} $</h2>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductCard