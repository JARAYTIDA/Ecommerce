import React from 'react'

import Img1 from '../assets/category/earphone.png'
import Img2 from '../assets/category/watch.png'
import Img3 from '../assets/category/macbook.png'
import Img4 from '../assets/category/gaming.png'
import Img5 from '../assets/category/vr.png'
import Img6 from '../assets/category/speaker.png'
import HomeElementButton from './HomeElementButton'

const Categories = () => {
  return (
    <>
        <div className="py-8">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* First col */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/20 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-2'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl front-blod opacity-20 mb-2'>Earphone</p>
                                < HomeElementButton text='Browse' bgColor='bg-primary' textColor='text-white'/>
                            </div>
                        </div>
                        <img src={Img1} alt="" className='w-[320px] absolute buttom-0'/>
                    </div>
                    {/* Second col */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandYellow/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-2'>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl front-blod opacity-20 mb-2'>Gadget</p>
                                < HomeElementButton text='Browse' bgColor='bg-white' textColor='text-brandYellow'/>
                            </div>
                        </div>
                        <img src={Img2} alt="" className='w-[320px] absolute -right-12 lg:top-[40px]'/>
                    </div>
                    {/* Third col */}
                    <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90 to-primary/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-2'>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl front-blod opacity-20 mb-2'>Laptop</p>
                                < HomeElementButton text='Browse' bgColor='bg-white' textColor='text-primary'/>
                            </div>
                        </div>
                        <img src={Img3} alt="" className='w-[320px] absolute top-1/2 -translate-y-1/2 -right-0'/>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-8">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* First col */}
                    <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-500/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-2'>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl text-white font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl text-white front-blod opacity-20 mb-2'>Gaming</p>
                                < HomeElementButton text='Browse' bgColor='bg-primary' textColor='text-white'/>
                            </div>
                        </div>
                        <img src={Img4} alt="" className='w-[320px] absolute top-1/2 -translate-y-1/2 -right-0'/>
                    </div>
                    {/* Second col */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/100 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-2'>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl front-blod opacity-20 mb-2'>Virtual</p>
                                < HomeElementButton text='Browse' bgColor='bg-white' textColor='text-brandGreen'/>
                            </div>
                        </div>
                        <img src={Img5} alt="" className='w-[280px] absolute -right-7 lg:top-[70px]'/>
                    </div>
                    {/* Third col */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue/100 to-brandBlue/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-2'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl front-blod opacity-20 mb-2'>Speaker</p>
                                < HomeElementButton text='Browse' bgColor='bg-white' textColor='text-brandBlue'/>
                            </div>
                        </div>
                        <img src={Img6} alt="" className='w-[320px] absolute -right-7 lg:top-[40px]'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Categories