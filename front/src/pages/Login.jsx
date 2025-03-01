import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [signindata, setSignindata] = useState({
        password : '',
        email_id : ''
    })
    const navigate = useNavigate();
    const [errorMessage, seterrorMessage] = useState('');
    const email = window.localStorage.getItem("email_id");
    const handlSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://ecommerce-295o.onrender.com/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signindata),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data); // Response from the server
                window.localStorage.setItem('email_id', data[0].email_id)
                navigate('/')
                window.location.reload();
            } else {
                if(response.status === 403){
                    seterrorMessage('please verify you email id')
                    console.log('verify')
                }
                else{
                    console.log('incorrect');
                    seterrorMessage('incorrect email id or password')
                }
            }
        } catch (error) {
            console.error('Error:', error);
            navigate('/login')
        }
    }
    return (
        <div>
            <section className="bg-gray-50 ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Login into your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handlSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required onChange={(e)=>setSignindata({...signindata, email_id:e.target.value})}/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required onChange={(e)=>setSignindata({...signindata, password:e.target.value})}/>
                                </div>
                                <div>
                                <Link to='/forgot-password' className="text-sm font-medium text-yellow-600-600 hover:underline ">{errorMessage}</Link>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required=""/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 ">Remember me</label>
                                        </div>
                                    </div>
                                    <Link to='/forgot-password' className="text-sm font-medium text-yellow-600-600 hover:underline ">Forgot password?</Link>
                                </div>
                                <button type="submit" className="w-full text-white bg-yellow-600 hover:bg-yellow-600-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
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

export default Login