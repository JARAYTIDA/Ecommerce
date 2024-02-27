import React from 'react'
import { Banner1, BestSellerProducts, Categories, HomeElement } from '../components'

import Img1 from '../assets/hero/headphone.png'
import Img2 from '../assets/category/smartwatch2-removebg-preview.png'

const bannerData = {
  discount : '30% OFF',
  title : 'Fine Smile',
  date : '10 Jan to 28 Jan',
  image : Img1,
  title2 : 'Air Solo Bass',
  title3 : 'Winter Sale',
  title4 : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam rem obcaecati',
  bgColor : '#f42c37',
  link : '/details2?product=headphone&id=1'
}

const bannerData2 = {
  discount : '32% OFF',
  title : 'Happy Hours',
  date : '10 Jan to 28 Jan',
  image : Img2,
  title2 : 'Smart Solo',
  title3 : 'Winter Sale',
  title4 : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam rem obcaecati',
  bgColor : '#2dcc6f',
  link : '/details2?product=gadget&id=1'
}

const Home = () => {
  let arr = [
    { name:"string 1", value:"this", other: "that" },
    { name:"string 2", value:"this", other: "that" }
];

let obj = arr.find(o => o.name === 'string 1');

console.log(obj);
  return (
    <>
      < HomeElement />
      < Categories />
      < Banner1 data = {bannerData}/>
      < BestSellerProducts />
      < Banner1 data = {bannerData2}/>
      {/* < Footer /> */}
    </>
  )
}

export default Home