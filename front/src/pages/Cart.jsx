import React from 'react';

const cartItems = [
    {
        name: 'shoes',
        quantity: '2',
        price:'950$',
    },
    {
        name: 'shoes',
        quantity: '2',
        price:'950$',
    },
    {
        name: 'shoes',
        quantity: '2',
        price:'950$',
    },
    {
        name: 'shoes',
        quantity: '2',
        price:'950$',
    }
]

const Cart = () => {
    return (
        <>
            <div className='container'>
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
            </div>
        </>
    )
}

export default Cart;