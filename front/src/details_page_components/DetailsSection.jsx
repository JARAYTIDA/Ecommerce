import React from "react"
import DetailedProduct from "./DetailedProduct"
import CTASection from "./CTASection"

const DetailsSection = ({cartCounter, setCartCounter, id, product}) => {
  return (
    <div className=' flex flex-col p-6 gap-3 md:w-full md:max-w-[600px]'>
        <DetailedProduct id = {id} product={product} />
        <CTASection setCartCounter={setCartCounter} cartCounter={cartCounter} id = {id} product = {product}/>
    </div>
  )
}
export default DetailsSection