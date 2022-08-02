import React from "react";
import NavBar from "../NavBar/NavBar";
import { Routes,Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Checkout from '../../pages/Checkout/Checkout';

const Navigation = () => {
    return(
        <>
            <NavBar/>
            <Routes>
                <Route  path="/" element={ <Home/>} />
                <Route path="/checkout" element={<Checkout/>} />
            </Routes>
        </>
    )

}

export default Navigation