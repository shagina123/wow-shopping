import React from 'react'
import insta from './insta.svg';
import face from './face.svg';
import twitter from './twitter.svg';

export default function Footer() {
    return (
        <div>
        <div className='bottomfooter'>

        <div className='footerchild1'>
            <div style={{ width: '25%' }}>
                <ul>
                    <li className='footerLinks'>Our Guide</li>
                    <li className='footerLinks1'>About Us</li>
                    <li className='footerLinks1'>FAQ</li>
                    <li className='footerLinks1'>Corporate Site</li>
                    <li className='footerLinks1'>Our Showrooms</li>
                    <li className='footerLinks1'>Terms & Conditions</li>
                    <li className='footerLinks1'>Privacy Policy</li>

                </ul>
            </div>
            <div style={{ width: '25%' }}>
                <ul>
                    <li className='footerLinks'>Our Services</li>
                    <li className='footerLinks1'>Returns & Exchange</li>
                    <li className='footerLinks1'>Pay Monthly Installments</li>
                    <li className='footerLinks1'>Easy Credit Offers</li>
                    <li className='footerLinks1'>About Us</li>
                    <li className='footerLinks1'>Site Mag</li>
                    <li className='footerLinks1'>B2B Services</li>
                </ul>
            </div>
            <div style={{ width: '25%' }}>
                <ul>
                    <li className='footerLinks'>Categories</li>
                    <li className='footerLinks1'>Mobiles</li>
                    <li className='footerLinks1'>Tablets</li>
                    <li className='footerLinks1'>Laptops</li>
                    <li className='footerLinks1'>Camera</li>
                    <li className='footerLinks1'>Headphones</li>
                    <li className='footerLinks1'>Television</li>

                </ul>
            </div>
            <div style={{ width: '25%' }}>
                <ul>
                    <li className='footerLinks'>Our Services</li>
                    <li className='footerLinks1'>Returns & Exchange</li>
                    <li className='footerLinks1'>Pay Monthly Installments</li>
                    <li className='footerLinks1'>Easy Credit Offers</li>
                    <li className='footerLinks1'>About Us</li>
                    <li className='footerLinks1'>Site Mag</li>
                    <li className='footerLinks1'>B2B Services</li>

                </ul>
            </div>

        </div>

        <div className='footerchild2'>
            <div>
                <ul>
                    <li className='footerLinks'>Follow Us</li>
                    <li className='footerLinks1'><div style={{ display: 'flex' }}>
                        <div style={{ width: '35px', height: '25px', padding: '10px',paddingLeft:'0px' }}>
                            <img src={insta} style={{ width: '25px', height: '25px' }} />
                        </div>

                        <div style={{ width: '35px', height: '25px', padding: '10px',paddingLeft:'0px' }}>
                            <img src={twitter} style={{ width: '25px', height: '25px' }} />
                        </div>
                        <div style={{ width: '35px', height: '25px', padding: '10px',paddingLeft:'0px' }}>
                            <img src={face} style={{ width: '25px', height: '25px' }} />
                        </div>
                    </div></li>


                </ul>
            </div>
        </div>
        </div>
<div style={{color:'#212121',fontSize:'13px', width:'100%', backgroundColor:'#F3F3F3' , height:'59px', paddingTop:'27px',paddingLeft:'50px'}}>
© 2021 Beebizzle. All Rights Reserved
</div>
    </div>
    )
}
