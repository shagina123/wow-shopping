import React from 'react'
import insta from './insta.svg';
import face from './face.svg';
import twitter from './twitter.svg';

export default function FooterMob() {
    return (
        <div>
            <div className='bottomfooterMob'>
                <div className='footerchild1Mob' style={{ flexWrap: 'wrap' }}>
                    <div style={{ width: '50%' }}>
                        <ul>
                            <li className='footerLinksMob'>Our Guide</li>
                            <li className='footerLinks1Mob'>About Us</li>
                            <li className='footerLinks1Mob'>FAQ</li>
                            <li className='footerLinks1Mob'>Corporate Site</li>
                            <li className='footerLinks1Mob'>Our Showrooms</li>
                            <li className='footerLinks1Mob'>Terms & Conditions</li>
                            <li className='footerLinks1Mob'>Privacy Policy</li>

                        </ul>
                    </div>
                    <div style={{ width: '50%' }}>
                        <ul>
                            <li className='footerLinksMob'>Our Services</li>
                            <li className='footerLinks1Mob'>Returns & Exchange</li>
                            <li className='footerLinks1Mob'>Pay Monthly Installments</li>
                            <li className='footerLinks1Mob'>Easy Credit Offers</li>
                            <li className='footerLinks1Mob'>About Us</li>
                            <li className='footerLinks1Mob'>Site Mag</li>
                            <li className='footerLinks1Mob'>B2B Services</li>
                        </ul>
                    </div>
                    <div style={{ width: '50%' }}>
                        <ul>
                            <li className='footerLinksMob'>Categories</li>
                            <li className='footerLinks1Mob'>Mobiles</li>
                            <li className='footerLinks1Mob'>Tablets</li>
                            <li className='footerLinks1Mob'>Laptops</li>
                            <li className='footerLinks1Mob'>Camera</li>
                            <li className='footerLinks1Mob'>Headphones</li>
                            <li className='footerLinks1Mob'>Television</li>

                        </ul>
                    </div>
                    <div style={{ width: '50%' }}>
                        <ul>
                            <li className='footerLinksMob'>Our Services</li>
                            <li className='footerLinks1Mob'>Returns & Exchange</li>
                            <li className='footerLinks1Mob'>Pay Monthly Installments</li>
                            <li className='footerLinks1Mob'>Easy Credit Offers</li>
                            <li className='footerLinks1Mob'>About Us</li>
                            <li className='footerLinks1Mob'>Site Mag</li>
                            <li className='footerLinks1Mob'>B2B Services</li>

                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='footerLinksMob'>Follow Us</li>
                            <li className='footerLinks1Mob'><div style={{ display: 'flex' }}>
                                <div style={{ width: '35px', height: '25px', padding: '10px', paddingLeft: '0px' }}>
                                    <img src={insta} style={{ width: '25px', height: '25px' }} />
                                </div>

                                <div style={{ width: '35px', height: '25px', padding: '10px', paddingLeft: '0px' }}>
                                    <img src={twitter} style={{ width: '25px', height: '25px' }} />
                                </div>
                                <div style={{ width: '35px', height: '25px', padding: '10px', paddingLeft: '0px' }}>
                                    <img src={face} style={{ width: '25px', height: '25px' }} />
                                </div>
                            </div></li>


                        </ul>
                    </div>

                </div>
            </div>
            <div style={{ color: '#212121', fontSize: '13px', width: '100%', backgroundColor: '#F3F3F3', height: '38px', paddingTop: '14px', paddingLeft: '30px' }}>
                © 2021 Beebizzle. All Rights Reserved
</div>
        </div>
    )
}
