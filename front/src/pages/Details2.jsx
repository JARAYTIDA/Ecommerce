// import { useState } from "react";
import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';
import { products_data } from '../assets/data/all_data';
import { DetailsSection, Slider } from '../details_page_components';



const Details2 = () => {
    const location = useLocation();
    // Extract the search/query string from the location
    const queryParams = new URLSearchParams(location.search);
    console.log(queryParams.get('product'));
    console.log(queryParams.get('id'));
    const [cartCounter, setCartCounter] = useState(0);
    return (
        <div className="font-kumbhsans md:max-w-[80%] md:mx-auto md:px-4">
            <div className="flex flex-col md:flex-row md:px-0 md:gap-6 md:py-20 items-center md:justify-center lg:px-14 lg:gap-16">
                <Slider data={products_data[`${queryParams.get('product')}`]} id = {queryParams.get('id')}/>
                <DetailsSection cartCounter={cartCounter} setCartCounter={setCartCounter} product = {queryParams.get('product')} id = {queryParams.get('id')}/>
            </div>
        </div>
    )
}

export default Details2