import React from 'react'

const Cancel = () => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    const sendOrderDetails = async () => {
        try {
            const response = await fetch(`https://ecommerce-lcv2.onrender.com/reset/cencel?email=${email}`);
            console.log(response);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        sendOrderDetails();
    }, [])
    return (
        <div className="bg-gray-200 dark:bg-gray-900 h-screen">
            <div className="bg-white p-6  md:mx-auto">
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Cancelled!</h3>
                    <p className="text-gray-600 my-2">Your payment is cancelled due to some issues.</p>
                    <p> Have a great day!  </p>
                    <div className="py-10 text-center">
                        <a href="/" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                            CONTINUE SHOPPING
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cancel