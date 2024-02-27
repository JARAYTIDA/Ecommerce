import { products_data } from "../assets/data/all_data"

const DetailedProduct = ({product, id}) => {
    return (
      <div>
          {/* Subtitle */}
          <h2 className="uppercase text-orange mb-3 font-bold tracking-[0.13em] text-xs 
          md:text-base">{products_data[product][id-1].compnay}</h2>
          {/* Product Name */}
          <h1 className="font-bold text-3xl mb-4 md:text-5xl md:mb-10">{products_data[product][id-1].name}</h1>
          {/* Product Description */}
          <p className='text-dark-grayish-blue mb-5 text-sm leading-[22px] md:text-base'>
              {products_data[product][id-1].description}
          </p>
          {/* Product Price */}
          <div className='flex items-center justify-between md:flex-col md:items-start mt-2'>
            <div className='flex gap-4 items-center'>
                {/* Price */}
                <span className='font-bold text-2xl'>${products_data[product][id-1].price1}.00</span>
                {/* Discount */}
                <span className='bg-pale-orange text-orange font-bold text-sm px-2 rounded-md'>50%</span>
            </div>
            {/* Previous price */}
            <span className='text-grayish-blue text-sm font-bold'><del>${products_data[product][id-1].price2}.00</del></span>
          </div>
      </div>
    )
  }
  
  export default DetailedProduct