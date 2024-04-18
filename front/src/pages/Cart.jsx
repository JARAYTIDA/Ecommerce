import React, { useEffect, useState } from 'react';
import { products_data } from '../assets/data/all_data';
import { useNavigate } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { Link } from 'react-router-dom';

const Cart = () => {
    const email = window.localStorage.getItem('email_id');
    const [cartData, setcartData] = useState([]);
    const [show, setshow] = useState(false)
    const navigate = useNavigate()
    const [subtotal, setsubtotal] = useState(0)
    const [cnt, setcnt] = useState(0)

    const getPrice = async (email_id) => {
        try {
            const response = await fetch(`https://ecommerce-295o.onrender.com/auth/total?email=${email_id}`);
            // console.log(response);
            if (response.ok) {
                const data = await response.json();
                // console.log(data); // Response from the server
                setsubtotal(data.price);
                setshow(true);
                // setcartData(data.cart);
                // console.log(cartData)
                // window.localStorage.setItem('email_id', data[0].email_id)
            } else {
                console.error('Failed to submit form');
                setshow(false);
            }
        } catch (error) {
            console.error('Error:', error);
            setshow(false);
        }
    }

    const getData = async (email_id) => {
        
        try {
            const response = await fetch(`https://ecommerce-295o.onrender.com/auth/get-cart?email=${email_id}`);
            // console.log(response);
            if (response.ok) {
                const data = await response.json();
                // console.log(data);
                setcartData(data.cart) // Response from the server
                // console.log(cartData)
                setshow(true);
                // setcartData(data.cart);
                // console.log(cartData)
                // window.localStorage.setItem('email_id', data[0].email_id)
            } else {
                console.error('Failed to submit form');
                setshow(false);
            }
        } catch (error) {
            console.error('Error:', error);
            setshow(false);
        }
    }
    useEffect(() => {
        if(email === null || email === undefined){
            navigate('/login');
        }
        else{
            getData(email);
            getPrice(email);
        }
    }, [cnt])
    
	const makePayment = async()=>{
        const stripe = await loadStripe("pk_test_51OkS7lSEchjdc9Wle9oKqva4U3xfd5zp2WEqAAmw1aZQ10nPbaHQfE5vTmKY1WQnHOdASsETfFfxKipgzhBJBoEn00echh9C8X");
        
        const body = {
            products:cartData
        }
        const headers = {
            "Content-Type":"application/json"
        }
        const response = await fetch(`https://ecommerce-295o.onrender.com/auth/pay?email=${email}`,{
            method:"POST",
            headers:headers,
            body:JSON.stringify(body)
        });

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId:session.id
        });

        if(result.error){
            console.log(result.error);
        }
    }
    
    console.log(cartData);

    const incrCart = async (product, id) => {
        console.log('inc cart')
        const response = await fetch(`https://ecommerce-295o.onrender.com/auth/incr-cart?product=${product}&id=${id}&email=${email}`)
        try {
            if (response.ok) {
                const data = await response.json();
                // console.log(data); // Response from the server
                setcnt(cnt+1)
                
            } else {
                console.error('Failed to submit form');
                
            }
        
        } catch (error) {
            console.log(error)
        }
    }

    const decCart = async (product, id) => {
        console.log('inc cart')
        const response = await fetch(`https://ecommerce-295o.onrender.com/auth/dec-cart?product=${product}&id=${id}&email=${email}`)
        try {
            if (response.ok) {
                const data = await response.json();
                // console.log(data); // Response from the server
                setcnt(cnt+1)
                
            } else {
                console.error('Failed to submit form');
                
            }
        
        } catch (error) {
            console.log(error)
        }
    }
    

    const remove = async (product, id) => {
        console.log('dec cart')
        const response = await fetch(`https://ecommerce-295o.onrender.com/auth/remove?product=${product}&id=${id}&email=${email}`)
        try {
            if (response.ok) {
                const data = await response.json();
                // console.log(data); // Response from the serve
                
            } else {
                console.error('Failed to submit form');
                
            }
        
        } catch (error) {
            console.log(error)
        }
        window.location.reload();
    }
    
    return (
        <>
            <section className="items-center py-24 bg-gray-50 font-poppins dark:bg-gray-800">
                {cartData?.length === 0 ? <div className='flex flex-col justify-center items-center'>
                    <h2 className="mb-10 text-4xl font-bold text-center dark:text-gray-400">Your cart is empty</h2> 
                    <img className='font-bold text-gray-300 flex-center justify-center bg-gray-800' src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png?f=webp" alt="" />
                </div>: <div className="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
                    <h2 className="mb-10 text-4xl font-bold text-center dark:text-gray-400">Your Cart</h2>
                    <div className="mb-10">
                        {
                            cartData?.map((data, index)=>(
                                <div key={index} className="relative flex flex-wrap items-center pb-8 mb-8 -mx-4 border-b border-gray-200 dark:border-gray-500 xl:justify-between border-opacity-40">
                                    <div className="w-full mb-4 md:mb-0 h-96 md:h-44 md:w-56">
                                        <Link to = {`/details2?product=${data.product}&id=${data.id}`}>
                                            <img src={products_data[data.product][data.id - 1].img} alt="" className="object-cover w-full h-full"/>
                                        </Link>
                                    </div>
                                    <div className="w-full px-4 mb-6 md:w-96 xl:mb-0">
                                        <a className="block mb-5 text-xl font-medium dark:text-gray-400 hover:underline" href="/cart">
                                        {products_data[data.product][data.id - 1].name}</a>
                                        
                                    </div>
                                    <div className="w-full px-4 mt-6 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
                                        <div className="flex items-center">
                                            <h2 className="mr-4 font-medium dark:text-gray-400">Qty:{data.count}</h2>
                                            <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 ">
                                                {data.count > 1 && <button onClick={()=>decCart(data.product, data.id)} className="py-2 pr-2 border-r border-gray-300 dark:border-gray-600 dark:text-gray-400 hover:text-gray-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                                                    </svg>
                                                </button>}
                                                <div className='text-gray-300'>{data.count}</div>
                                                <button onClick={()=>incrCart(data.product, data.id)} className="py-2 pl-2 border-l border-gray-300 dark:border-gray-600 hover:text-gray-700 dark:text-gray-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
                                        <button onClick = {()=>remove(data.product, data.id)} className="inline-block px-8 py-4 font-bold text-white uppercase bg-primary rounded-md hover:bg-primary/40" href="/cart">Remove</button>
                                    </div>
                                    <div className="w-full px-4 xl:w-auto">
                                        <span className="text-xl font-medium text-primary ">
                                            <span className="text-sm">$</span>
                                            <span>{10*(parseInt(data.count))}</span>
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
                                <span className="font-bold ">${subtotal}</span>
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
                                <span className="font-bold ">${subtotal + 1000.00}</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <a className="inline-block w-full px-8 py-4 mb-4 mr-6 font-bold text-center uppercase transition duration-200 bg-gray-100 border rounded-md dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 md:mb-0 md:w-auto hover:bg-gray-200 " href="/">Continue Shopping</a>
                        <button onClick={makePayment} className="inline-block w-full px-8 py-4 font-bold text-center text-white uppercase transition duration-200 bg-primary/80 rounded-md md:w-auto hover:bg-primary/100 " href="/cart">Go to Checkout</button>
                    </div>
                </div>}
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
