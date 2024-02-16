import React from 'react'

const Products_List = () => {
    return (

<div className="font-[sans-serif]">
      <div className="p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full">
        <h2 className="text-4xl font-extrabold dark:text-gray-200 text-gray-800 mb-12">Coffee store</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>
            <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/coffee1.webp" alt="Product 1" className="h-full w-full object-contain" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-bold text-gray-800">Espresso Elegante</h3>
              <h4 className="text-xl text-gray-700 font-bold mt-4">$10 <span className="text-gray-400 ml-2 font-medium">$15</span></h4>
              <button type="button" className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full">Add to cart</button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>
            <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/coffee2.webp" alt="Product 2" className="h-full w-full object-contain" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-bold text-gray-800">Mocha Madness</h3>
              <h4 className="text-xl text-gray-700 font-bold mt-4">$12 <span className="text-gray-400 ml-2 font-medium">$17</span></h4>
              <button type="button" className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full">Add to cart</button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>
            <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/coffee3.webp" alt="Product 3" className="h-full w-full object-contain" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-bold text-gray-800">Caramel Cream Delight</h3>
              <h4 className="text-xl text-gray-700 font-bold mt-4">$14 <span className="text-gray-400 ml-2 font-medium">$19</span></h4>
              <button type="button" className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full">Add to cart</button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>
            <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/coffee4.webp" alt="Product 3" className="h-full w-full object-contain" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-bold text-gray-800">Hazelnut Heaven Blend</h3>
              <h4 className="text-xl text-gray-700 font-bold mt-4">$12 <span className="text-gray-400 ml-2 font-medium">$17</span></h4>
              <button type="button" className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full">Add to cart</button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>
            <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/coffee5.webp" alt="Product 3" className="h-full w-full object-contain" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-bold text-gray-800">Vanilla Velvet Brew</h3>
              <h4 className="text-xl text-gray-700 font-bold mt-4">$15 <span className="text-gray-400 ml-2 font-medium">$20</span></h4>
              <button type="button" className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full">Add to cart</button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>
            <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/coffee6.webp" alt="Product 3" className="h-full w-full object-contain" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-bold text-gray-800">Double Shot Symphony</h3>
              <h4 className="text-xl text-gray-700 font-bold mt-4">$14 <span className="text-gray-400 ml-2 font-medium">$19</span></h4>
              <button type="button" className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full">Add to cart</button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>
            <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/coffee7.webp" alt="Product 3" className="h-full w-full object-contain" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-bold text-gray-800">Irish Cream Dream</h3>
              <h4 className="text-xl text-gray-700 font-bold mt-4">$11 <span className="text-gray-400 ml-2 font-medium">$16</span></h4>
              <button type="button" className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full">Add to cart</button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>
            <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/coffee8.webp" alt="Product 3" className="h-full w-full object-contain" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-bold text-gray-800">Coconut Bliss Coffee</h3>
              <h4 className="text-xl text-gray-700 font-bold mt-4">$13 <span className="text-gray-400 ml-2 font-medium">$18</span></h4>
              <button type="button" className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        // <div>
        //     <div className="bg-white">
        //         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        //             <h2 className="sr-only">Products</h2>

        //             <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        //             <a href="#" className="group">
        //                 <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        //                 <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        //                 </div>
        //                 <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
        //                 <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
        //             </a>
        //             <a href="#" className="group">
        //                 <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        //                 <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        //                 </div>
        //                 <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
        //                 <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        //             </a>
        //             <a href="#" className="group">
        //                 <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        //                 <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        //                 </div>
        //                 <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
        //                 <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
        //             </a>
        //             <a href="#" className="group">
        //                 <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        //                 <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        //                 </div>
        //                 <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
        //                 <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        //             </a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Products_List