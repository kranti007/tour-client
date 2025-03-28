import React from 'react';
import choose1 from '../Assets/choose-image1.png';
import choose2 from '../Assets/choose-image2.png';
import choose3 from '../Assets/choose-img3.jpg';
import choose4 from '../Assets/choose-image4.jpg';
import './Choose.css';

const Choose = () => {
    return (
        <div>

            <div id="Choose-Us">
                <div className="choose">
                    <h1>  why choose us?
                    </h1>

                    <div className="choose-box">
                        <div className="card1">
                            <img src={choose1} alt="" />

                            <div className="info"> <h2 className="name"> Destination </h2>
                                <p>Looking for your next tour? we are here t help youwith the Multifarious destinations.</p>
                            </div>

                        </div>

                        <div className="card1">
                            
                            <img src={choose2} alt="" />

                            <div className="info"> <h2 className="name"> value for Money </h2>
                                <p>We are providing special packages for all india with very min coast..</p>
                            </div>

                        </div>

                        <div className="card1">
                            <img src={choose3} alt="" />

                            <div className="info"> <h2 className="name">Beautiful places </h2>
                                <p>Our mission to provide you to feel Incredible Tour experience.</p>
                            </div>

                        </div>


                        <div className="card1">
                            <img src={choose4} alt="" />

                            <div className="info"> <h2 className="name">Passionate Travel</h2>
                                <p>We show the best in tarvel option for travellers who are desperate to select items off from their bucket list.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            </div>
    )
}
export default Choose;




/**import React from "react";
import './About.css';
import mumbai from '../Assets/mumabi-destination.jpeg';
const About = () => {
    return (
<>
        <div className="about" >
            <div className="left">
                <img src="./Assets/about-image.jpg" alt="" />
                <div className="img-item">
                    <img src="./Assets/bg2-image.jpeg" alt="" />
                </div>
            </div>

            <div className="right">
                <p className="about-p">
                    Explore All Corners of the World with us
                </p>
                <h1> Welcome to <span>K-Travel</span></h1>

                <p className="para-2">K-Travels, a complete Destination Management Company and  adventure tour specialist,  provide comprehensive travel  packages for  adventure, leisure, group,  corporate  as well as individual travellers.The company has been growing steadily and in the process innovating its product range, launching new ideas and rediscovering new destinations to increase its service range.
                    <br>
                    </br>
                    <br>
                    </br>

                    At K-travel we are adaptable to our client’s ideas and specific requirements which has  helped us to become  one of the most sought after  travel companies in the country, providing excellent support to individual and group travellers, catering to their specific requirements.
                </p>
            </div>
        </div>

        <div className="container">
            <div className="sub-container">
            <p className="para-3">Personal attention to every client with professional service.</p>
                <h1> Why Choose <span>Us ?</span></h1>
                <p className="para-4">At K-travel we are adaptable to our client’s ideas and specific requirements which has  helped us to become  one of the most sought after  travel companies in the country, providing excellent support to individual and group travellers, catering to their specific requirements.</p>
            </div>

            <div className="right-again">
                <img src= {mumbai}alt="" />
            </div>
        </div>
</>
    )
};
export default About; */