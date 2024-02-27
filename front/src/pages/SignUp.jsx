import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate();
    const [signupdata, setSignupdata] = useState({
        password : '',
        user_id : '',
        email_id : ''
    })
    const handlSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupdata),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data); 

                // const jwt_token = jwt_token.sign(data, "ghjkl;");
                const expirationDate = new Date();
                expirationDate.setTime(expirationDate.getTime() + (1 * 60 * 60 * 1000));
                const expires = "expires=" + expirationDate.toUTCString();
                // document.cookie = `uuid=${jwt_token};` + expires + "; path=/";

                navigate('/verify-email');
                // Response from the server
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-yellow-600">
                                Create your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handlSubmit}>
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                                    <input type="text" name="user_id" id="user_if" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required onChange={(e)=>setSignupdata({...signupdata, user_id:e.target.value})}/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Id</label>
                                    <input type="email" name="email_id" id="email_id" placeholder="name@company.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e)=>setSignupdata({...signupdata, email_id:e.target.value})}/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e)=>setSignupdata({...signupdata, password:e.target.value})}/>
                                </div>
                                <button type="submit" className="w-full text-white bg-yellow-600 hover:bg-yellow-600-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600-600 dark:hover:bg-yellow-600-700 dark:focus:ring-primary-800">Sign up</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to="/login" className="font-medium text-yellow-600 hover:underline dark:text-yellow-600-500">Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUp