import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // Extract the search/query string from the location
    const queryParams = new URLSearchParams(location.search);
    const ticket = queryParams.get('ticket');

    const handlClick = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://ecommerce-1-7a3c.onrender.com/verify?ticket=${ticket}`);

            if (response.ok) {
                const data = await response.json();
                console.log(data); // Response from the server
                navigate('/login')

            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-gray-200 dark:bg-gray-800 min-w-screen">
    <div className="max-w-xl p-8 text-center text-gray-800 bg-white dark:bg-gray-300 shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
        <h3 className="text-2xl">Thanks for signing up on our website !</h3>
        <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-green-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
            </svg>
        </div>

        <p>We're happy you're here. Let's get your email address verified:</p>
        <div className="mt-4">
            <button onClick={handlClick} className="px-2 py-2 text-blue-200 bg-blue-600 rounded">Click to Verify Email</button>
            <p className="mt-4 text-sm">If you’re having trouble clicking the "Verify Email Address" button, copy
                and
                paste
                the URL below
                into your web browser:
                <a href="#" className="text-blue-600 underline">http://localhost:8000/email/verify/3/1ab7a09a3</a>
            </p>
        </div>
    </div>
</div>
  )
}

export default VerifyEmail