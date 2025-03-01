import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
    const backgroundImageUrl = 'https://source.unsplash.com/1L71sPT5XKc';
    const profileImageUrl = 'https://source.unsplash.com/MP0IUfwrn0A';
    const [profile, setprofile] = useState(null);
    const navigate = useNavigate();
    const email = window.localStorage.getItem('email_id');

    const getProfile = async (email) => {
        const response = await fetch(`https://ecommerce-295o.onrender.com/auth/get?email=${email}`);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            setprofile(data) // Response from the server
            // console.log(data);
            // setcartData(data.cart);
            // console.log(cartData)
            // window.localStorage.setItem('email_id', data[0].email_id)
        } else {

            navigate('/login');
            console.error('Failed to fetch user');
        }
    }

    useEffect(() => {
        if(email === null || email === undefined){
            navigate('/login');
        }
        else{
            getProfile(email);
        }
    }, [])

    const handleClick = () => {
        window.localStorage.removeItem('email_id');
            window.location.href = 'https://ecommerce-lcv2.onrender.com/login';
    // Reload the page
            window.location.reload();
    }
    
    // const profile = jwt_decode(data);

    return (
        <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                {/* Main Column */}
                <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
                    <div className="p-4 md:p-12 text-center lg:text-left">
                        {/* Image for mobile view */}
                        <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{ backgroundImage: `url(${profileImageUrl})` }}></div>

                        <h1 className="text-3xl font-bold pt-8 lg:pt-0">{profile?.name}</h1>
                        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                        <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                            <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                            </svg> What you do
                        </p>
                        <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                            <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zm3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                            </svg> {profile?.email}
                        </p>
                        <p className="pt-8 text-sm">Totally optional short description about yourself, what you do and so on.</p>
                        <div className="pt-12 pb-8">
                            <button onClick={handleClick} className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">Logout</button>
                        </div>
                        <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                            <a className="link" href="#" data-tippy-content="@facebook_handle">
                                <svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>Facebook</title>
                                    <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                                </svg>
                            </a>
                        {/* Add other social media links */}
                        </div>
                    </div>
                </div>

                {/* Image Column */}
                <div className="w-full lg:w-2/5">
                    <img src={profileImageUrl} alt="Profile" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
                </div>
            </div>
        </div>
    )
}

export default Profile