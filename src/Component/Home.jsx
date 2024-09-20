
import React from 'react';
import { WhatsApp } from '@mui/icons-material';

const Home = () => {
    return (
        <div>
           <div className="heor-section">
            <div className="firstcontainer">
                <div className="hero-section-start">
            <div className="hero-text">
                <h1>Unlock Capital to Unleash Growth!</h1>
                <div className="hero-btnGroup">
                <button className='hero-btn'><p>Apply Now</p></button>
                <button className='hero-btn1'><WhatsApp /><p>+92374889933</p></button>
                </div>
            </div> 
            </div>
            </div>
            {/* <div className="inside_hero">
            <h1>Unlock Capital to Unleash Growth!</h1>
            <div className="btsdiv">
                <button className="btn1">mybutton1</button>
                <button className="btn2">mybutton2</button>
            </div>
            </div> */}
           </div>
        </div>
    );
}

export default Home;
