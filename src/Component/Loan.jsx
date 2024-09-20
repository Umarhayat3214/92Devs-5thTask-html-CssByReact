import { WhatsApp } from '@mui/icons-material';
import React from 'react';

const Loan = () => {
    return (
        <div>
        <div className="sect3">
            <div className="firstcontainer">
                <div className="sourceContent">
                    <h1>About Us</h1>
                    <div className="hr">
                    <hr />
                    </div>
                    <div className="afterHeadin">
                        <div className="sourceleft">
                            <div className="pera">
                            <p>At Secure Fast Funding, we understand the challenges—building a business isn’t easy, and neither is finding the right support. That’s why we’re here.</p>
                            <p>We deliver transparency, trust, and inclusive financing options while being with you every step of your entrepreneurial journey. Whether you're expanding, adopting new technologies, or navigating industry trends, we're by your side with customized support and expert financial guidance.</p>
                            <p>Backed by our only mission— Our SME clients have turned their visions into thriving realities from the first application to your business's continued success.
                            </p>
                            <p>Let's write your success story together!</p>
                            </div>
                            <div className="hero-btnGroup">
                <button className='hero-btn'><p>Apply Now</p></button>
                <button className='hero-btn1'><WhatsApp /><p>+92374889933</p></button>
                </div>
                        </div>
                        <div className="sourceright">
                            <img src="./images/image (1).png  " alt="" srcset=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Loan;
