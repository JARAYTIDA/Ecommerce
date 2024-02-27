import Stripe from 'stripe'
import dotenv from 'dotenv'
dotenv.config();

const stripe_pay = Stripe(process.env.STRIPE_SECRET, {
    apiVersion: '2020-08-27',
}
);

// checkout api
// export const pay = async (req, res) => {
//     // const { amount, success_url, cancel_url } = req.body;
//     const amount = 100;
//     const success_url = 'http://localhost:3000/success'
//     const cancel_url = 'http://localhost:3000/fail'
    
//     try {
//         const session = await stripe_pay.checkout.sessions.create({
//             payment_method_types: ['card'],
//             line_items: [{
//                 price_data: {
//                     currency: 'usd',
//                     product_data: {
//                     name: 'Your Product Name',
//                     },
//                     unit_amount: amount,
//                 },
//                 quantity: 1,
//             }],
//             mode: 'payment',
//             success_url: success_url,
//             cancel_url: cancel_url,
//         });
    
//         res.json({ sessionId: session.id });
//     } catch (error) {
//       // Handle Stripe errors
//         console.error("Stripe Error:", error);
//         res.status(500).json({ error: 'An error occurred while creating a checkout session' });
//     }
//   }


export const pay = async(req,res)=>{
    const {products} = req.body;

    console.log(products);

    const lineItems = products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.product,
                images:['https://rukminim2.flixcart.com/image/416/416/xif0q/computer/j/l/f/15s-fq5330tu-thin-and-light-laptop-hp-original-imagxpghfms8n8vd.jpeg?q=70&crop=false']
            },
            unit_amount: 10 * 100,
        },
        quantity:product.count
    }));

    console.log(lineItems)

    const session = await stripe_pay.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/sucess",
        cancel_url:"http://localhost:3000/cancel",
    });
    // res.status(200).json({message : 'success'});
    res.json({id:session.id})
 
}