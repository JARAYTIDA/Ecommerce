import Stripe from 'stripe'
import dotenv from 'dotenv'
dotenv.config();

const stripe_pay = Stripe(process.env.STRIPE_SECRET, {
    apiVersion: '2020-08-27',
}
);


export const pay = async(req,res)=>{
    const {products} = req.body;
    const {email} = req.query;

    // console.log(products);

    const lineItems = products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.product,
                images:[product.img]
            },
            unit_amount: product.price * 100,
        },
        quantity:product.count
    }));

    lineItems.push({
        price_data: {
            currency: "inr",
            product_data: {
                name: "Tax",
                images: [], // You may add tax-related images if needed
            },
            unit_amount: 100 * 100, // Convert to smallest currency unit (e.g., paisa)
        },
        quantity: 1, // Assuming tax is a fixed amount
    });

    lineItems.push({
        price_data: {
            currency: "inr",
            product_data: {
                name: "Shipping",
                images: [], // You may add shipping-related images if needed
            },
            unit_amount: 900 * 100, // Convert to smallest currency unit (e.g., paisa)
        },
        quantity: 1, // Assuming shipping charge is a fixed amount
    });


    // console.log(lineItems)

    const session = await stripe_pay.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:`http://localhost:3001/sucess?email=${email}`,
        cancel_url:"http://localhost:3001/cancel",
    });
    // res.status(200).json({message : 'success'});
    res.json({id:session.id})

}