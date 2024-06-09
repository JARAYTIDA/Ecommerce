import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ForgotPass = () => {
    const navigate = useNavigate();
    const [forgotPass, setForgotPass] = useState({email_id:'',});
    const handlSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://ecommerce-295o.onrender.com/reset/reset-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(forgotPass),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data); // Response from the server
                navigate('/reset-password-page')

            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <div>
            <section className="bg-gray-50 ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0  ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Forgot Passowrd
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handlSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required onChange={(e)=>setForgotPass({...forgotPass, email_id:e.target.value})}/>
                                </div>
                                <button type="submit" className="w-full text-white bg-yellow-600 hover:bg-yellow-600-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Reset Password</button>
                                <p className="text-sm font-light text-gray-500 ">
                                    Don’t have an account yet? <Link to="/signup" className="font-medium text-yellow-600 hover:underline ">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ForgotPass