import React from "react";
import Carousel from "./Carousel";
import Img1 from './images/image-product-1.jpg'
import Img2 from './images/image-product-2.jpg'
import Img3 from './images/image-product-3.jpg'
import Img4 from './images/image-product-4.jpg'


const slides = [
    'https://d2xamzlzrdbdbn.cloudfront.net/products/aaa49f0f-0139-4c71-99c6-726cb8c30bd523061120.jpg', 'https://d2xamzlzrdbdbn.cloudfront.net/products/bcace425-fbbb-449a-ae0b-5ffc879e9d6523061120.jpg', 'https://d2xamzlzrdbdbn.cloudfront.net/products/19a20c5e-c820-44fd-8a06-02343389d85223061119.jpg', 'https://d2xamzlzrdbdbn.cloudfront.net/products/b179c95a-fcbe-4597-956b-33e98ff5010623061119.jpg'
];

const Slider = ({data, id}) => {
  return (
    // <div className='relative h-72 overflow-hidden'>
    <div className='relative md:w-full md:max-w-[500px]'>
      {/* <img className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2' src="./images/image-product-1.jpg" alt="" /> */}
      <Carousel data = {data} id = {id}>
        {
          data[id-1].imgs.map( s => (
            <img className='w-[1200px] h-[500px]' key={s} src={ s } />
          ))
        }
      </Carousel>
    </div>
  )
}

export default Slider
