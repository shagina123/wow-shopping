import React from 'react'
import bgHome from './bghome2.jpg';
import cert from './cert.svg';
import phone from './phone.png';

export default function Headerbg() {
    return (
        <div>
            <div style={{ height: '199px' }}>
                <div className="containerImage">
                    <img src={bgHome} alt="Avatar" class="image" style={{ height: '100%', objectFit: 'cover' }} />
                    <div className="overlay"></div>
                    <div className="text">
                        <div style={{ display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>
                            <div style={{ alignSelf: 'center', height: '100%' }}>
                                <div style={{ height: '100%' }}>
                                    <div style={{ height: '90%', width: '90%', display: 'flex' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <img className='phoneImage' src={phone} style={{ width: '100%', height: '100%', alignSelf: "center", padding: '20px', objectFit: 'contain' }} />
                                        </div>
                                        <div style={{ width: '60%', display: 'flex', justifyContent: 'flex-start', marginLeft: '20px' }}>
                                            <div style={{ alignSelf: 'center', width: '100%' }}>
                                                <div style={{ fontSize: '25px', fontWeight: '600', }}>iPhone 11</div>
                                                <div style={{ fontSize: '11px' }}>The right amount to everything</div>
                                                <div style={{ }}>
                                                    <img src={cert} style={{ height: '32px',objectFit:'contain'}} />
                                                </div>
                                                <div style={{ fontSize: '16px', marginTop: '4%' }}>AED 507 <span style={{ textDecoration: 'line-through', fontSize: '12px' }}>AED 599</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
