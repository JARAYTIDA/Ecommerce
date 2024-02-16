import React from "react"
import DetailedProduct from "./DetailedProduct"
import CTASection from "./CTASection"

const DetailsSection = (props) => {

  return (
    <div className='dark:text-gray-300 flex flex-col p-6 gap-3 md:w-full md:max-w-[600px]'>
        <DetailedProduct />
        <CTASection props={props}/>
    </div>
  )
}
export default DetailsSection