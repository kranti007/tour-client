import React from "react";
import Home from "../Home/Home";


import About from "../Home/About/About";
import Container from "../Home/OurService/Container";
import WhyChoose from "../Home/WhyChoose/WhyChoose";
import Destination from "../Home/Destination/Destination";
import Footer from "../Home/Footer/Footer";



const HomeContent = () =>{
    return(
        <div>
            <Home/>
            <About/>
            <Container/>
            <Destination/>
            <WhyChoose/>
            
            <Footer/>
            
            
            
        </div>
    )
};
export default HomeContent;