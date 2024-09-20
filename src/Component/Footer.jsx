import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="firstcontainer">
                    <div className="footer_start">
                        <div className="footer_left">
                            <h1>SecureFast <span>Funding</span></h1>
                            <p>Copyright © 2024 SecureFastFunding. All rights reserved</p>
                            <div class="socialmedia">
                            <InstagramIcon className="custom-icon"/>
                            <LanguageIcon className="custom-icon"/>
                            <TwitterIcon className="custom-icon"/>
                            <YouTubeIcon className="custom-icon"/>
                        </div>
                        </div>
                        <div className="footer_right">
                            <div className="company">
                            <h1>Company</h1>
                            <div className="footer_Pera">
                                <p>Home</p>
                                <p>LoanServices</p>
                                <p>Check Eligibility</p>
                                <p>Blog</p>
                            </div>
                            </div>
                            <div className="company">
                            <h1>Support</h1>
                            <div className="footer_Pera">
                                <p>Contact Us</p>
                                <p>Term of Services</p>
                                <p>Privacy policy</p>
                                <p>FAQ</p>
                            </div>
                            </div>
                            <div className="company">
                            <h1>Stay up to date</h1>
                            <div className="footer_input">
                                <input type="text" name="" id="" placeholder='Your Email Address'/>
                            <SendIcon className='icon_go'/> 
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
