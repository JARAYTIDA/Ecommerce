// import { useState } from "react";
import React, {useState} from 'react'
import { DetailsSection, Slider } from '../details_page_components';



const Details2 = () => {
    const [cartCounter, setCartCounter] = useState(0);
    return (
        <div className="font-kumbhsans md:max-w-[80%] md:mx-auto md:px-4">
            <div className="flex flex-col md:flex-row md:px-0 md:gap-6 md:py-20 items-center md:justify-center lg:px-14 lg:gap-16">
                <Slider />
                <DetailsSection cartCounter={cartCounter} setCartCounter={setCartCounter}/>
            </div>
        </div>
    )
}

export default Details2