import userDetails from "../model/schema.js";

export const email_verification = async (req, res) => {
    const data = req.params;
    try{

        await userDetails.updateOne(
            { ticket:data.ticket },
            { $set: { verified: true } }
        )
        console.log("email verification successful");
        res.status(200).json({message: "email verification successful"});

    } catch(e) {
        console.log(e);
    }

}