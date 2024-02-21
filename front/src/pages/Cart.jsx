import React, { useEffect, useState } from 'react';
import { products_data } from '../assets/data/all_data';

const Cart = () => {
    const email = window.localStorage.getItem('email_id');
    const [cartData, setcartData] = useState([]);
    const [count, setcount] = useState(0)
    const getData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/auth/get-cart?email=${email}`);
            // console.log(response);
            if (response.ok) {
                const data = await response.json();
                // console.log(data);
                setcartData(data.cart) // Response from the server
                // setcartData(data.cart);
                // console.log(cartData)
                // window.localStorage.setItem('email_id', data[0].email_id)
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        getData();
    }, [count])
    
    console.log(cartData);
    
    return (
        <>
            <section className="items-center py-24 bg-gray-50 font-poppins dark:bg-gray-800">
                <div className="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
                    <h2 className="mb-10 text-4xl font-bold text-center dark:text-gray-400">Your Cart</h2>
                    <div className="mb-10">
                        {
                            cartData.length !== 0 && cartData.map((data)=>(
                                <div className="relative flex flex-wrap items-center pb-8 mb-8 -mx-4 border-b border-gray-200 dark:border-gray-500 xl:justify-between border-opacity-40">
                                    <div className="w-full mb-4 md:mb-0 h-96 md:h-44 md:w-56">
                                        <img src={products_data[data.product][data.id - 1].img} alt="" className="object-cover w-full h-full"/>
                                    </div>
                                    <div className="w-full px-4 mb-6 md:w-96 xl:mb-0">
                                        <a className="block mb-5 text-xl font-medium dark:text-gray-400 hover:underline" href="/cart">
                                        {products_data[data.product][data.id - 1].name}</a>
                                        
                                    </div>
                                    <div className="w-full px-4 mt-6 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
                                        <div className="flex items-center">
                                            <h2 className="mr-4 font-medium dark:text-gray-400">Qty:</h2>
                                            <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 ">
                                                <button className="py-2 pr-2 border-r border-gray-300 dark:border-gray-600 dark:text-gray-400 hover:text-gray-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                                                    </svg>
                                                </button>
                                                <input type="number" className="w-12 px-2 py-4 text-center border-0 rounded-md dark:bg-gray-800 bg-gray-50 dark:text-gray-400" placeholder="1"/>
                                                <button className="py-2 pl-2 border-l border-gray-300 dark:border-gray-600 hover:text-gray-700 dark:text-gray-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
                                        <a className="inline-block px-8 py-4 font-bold text-white uppercase bg-primary rounded-md hover:bg-primary/40" href="/cart">Remove</a>
                                    </div>
                                    <div className="w-full px-4 xl:w-auto">
                                        <span className="text-xl font-medium text-primary ">
                                            <span className="text-sm">$</span>
                                            <span>544.90</span>
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="mb-10">
                        <div className="px-10 py-3 bg-gray-100 rounded-md dark:bg-gray-800">
                            <div className="flex justify-between dark:text-gray-400">
                                <span className="font-medium">Subtotal</span>
                                <span className="font-bold ">$145.79</span>
                            </div>
                        </div>
                        <div className="px-10 py-3 rounded-md">
                            <div className="flex justify-between dark:text-gray-400">
                                <span className="font-medium">Shipping</span>
                                <span className="font-bold ">$100.00</span>
                            </div>
                        </div>
                        <div className="px-10 py-3 bg-gray-100 rounded-md dark:bg-gray-800">
                            <div className="flex justify-between dark:text-gray-400">
                                <span className="font-medium">Tax</span>
                                <span className="font-bold ">$900.00</span>
                            </div>
                        </div>
                        <div className="px-10 py-3 rounded-full dark:text-gray-400">
                            <div className="flex justify-between">
                                <span className="text-base font-bold md:text-xl ">Order Total</span>
                                <span className="font-bold ">$680.99</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <a className="inline-block w-full px-8 py-4 mb-4 mr-6 font-bold text-center uppercase transition duration-200 bg-gray-100 border rounded-md dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 md:mb-0 md:w-auto hover:bg-gray-200 " href="/cart">Continue Shopping</a>
                        <a className="inline-block w-full px-8 py-4 font-bold text-center text-white uppercase transition duration-200 bg-primary/80 rounded-md md:w-auto hover:bg-primary/100 " href="/cart">Go to Checkout</a>
                    </div>
                </div>
            </section>

            {/* <div className='container'>
                <div className='flex flex-center items-center justify-center'>
                    <h1 className='font-bold text-3xl dark:text-gray-400 py-6'> Your Cart </h1>
                </div>
                <div className="w-full overflow-x-auto">
                    <table className="min-w-full bg-white border rounded-lg">
                        <thead>
                        <tr className='py-3'>
                            <th className="px-4 py-2 text-left font-semibold text-gray-800">Product</th>
                            <th className="px-4 py-2 text-left font-semibold text-gray-800">Quantity</th>
                            <th className="px-4 py-2 text-left font-semibold text-gray-800">Remove</th>
                            <th className="px-4 py-2 text-left font-semibold text-gray-800">Price</th>
                            <th className="px-4 py-2"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id} className="border-black">
                            <td className="px-4 py-2">{item.name}</td>
                            <td className="px-4 py-2">{item.quantity}</td>
                            <td className="px-4 py-2">{item.price}</td>
                            <td className="px-4 py-2">
                                <button className="text-red-500 bg-gray-400 ">Remove</button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div> */}
        </>
    )
}

export default Cart;