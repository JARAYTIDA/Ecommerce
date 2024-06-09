import React, { useEffect, useState } from 'react'

const Details = () => {

    const [pincode_to, setpincode_to] = useState('');
    const [partners, setpartners] = useState([]);
    const [flag, setflag] = useState(true);


    const getDeliveryPartners = async () => {
        try {
            const response = await fetch(`https://apiv2.shiprocket.in/v1/external/courier/serviceability/?pickup_postcode=110001&delivery_postcode=${pincode_to}&weight=20&declared_value=20000&cod=0&qc_check=1`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQ3NzE0OTYsInNvdXJjZSI6InNyLWF1dGgtaW50IiwiZXhwIjoxNzE4MzMxNTgzLCJqdGkiOiJxZG5yZ1FHNHJhSXUzT1Y1IiwiaWF0IjoxNzE3NDY3NTgzLCJpc3MiOiJodHRwczovL3NyLWF1dGguc2hpcHJvY2tldC5pbi9hdXRob3JpemUvdXNlciIsIm5iZiI6MTcxNzQ2NzU4MywiY2lkIjo0NjA4OTI5LCJ0YyI6MzYwLCJ2ZXJib3NlIjpmYWxzZSwidmVuZG9yX2lkIjowLCJ2ZW5kb3JfY29kZSI6IiJ9.DmhoFCyatMI1QaRr3DRdysP80RXpcnBmWNmsP2qVMh0'
                }
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setpartners(data.data.available_courier_companies);
                console.log(partners);
                setflag(false);
            } else {
                console.error('Error fetching data: ', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    }

    useEffect(() => {
        getDeliveryPartners();
    }, [flag])
    

    return (
        <>
            <div style={{ color: 'gray-900', padding:'30px' }}>
                <div style={{display:'flex'}}>
                    <div>
                        Delivery PinCode : 
                    </div>
                    <div style={{paddingLeft:'10px'}}>
                        <input style={{ color: 'black', border:'2px solid black',}} type="number" onChange={(e) => setpincode_to(e.target.value)}/>
                    </div>
                    <div style={{paddingLeft:'20px',}}>
                        <button style={{ backgroundColor:'#745be7', borderRadius:'10px', padding:'2px 15px'}} onClick={getDeliveryPartners} >Submit</button>
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: '30px', width:'800px', overflowX:'auto'}}>
                    <div style={{ margin: '20px', display:'block', }}>
                        <div style={{ display: 'flex', padding: '10px', backgroundColor: 'white', justifyContent: 'space-between', color: 'black', borderRadius: '10px', border:'2px solid black' ,alignItems: 'center'}}>
                            <div style={{width:'250px'}}>courier_name</div>
                            <div>pay</div>
                            <div style={{width:'170px'}}>
                                <div>partner.etd</div>
                                <div style={{ color: 'green' }}>sdfs Days</div>
                            </div>
                            <div style={{width:'50px'}}>eight kg</div>
                            <div style={{width:'100px'}}>freight_charge ₹</div>
                            <button style={{ backgroundColor: '#745be7', padding: '10px', borderRadius: '10px', width:'100px' }} >Choose</button>
                        </div>
                    </div>
     
            </div>
        </>
    )
}

export default Details