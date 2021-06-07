import React from 'react'
import preview from './preview.jpeg';
import cert from './cert.svg';
export default function CartMobileContent() {
    return (
        <div className='CartContainer'>
            <div className='itemsContent' style={{ backgroundColor: '#F1F3F6' }}>
                <div className='cartItems' style={{ width: '100%' }}>
                    <div style={{ width: '100%' }}>
                        <div style={{ fontSize: '12px', color: '#FFFFFF', width: '100%' }}>
                            <div style={{ padding: '10px', paddingTop: '10px', backgroundColor: '#FFFFFF', paddingBottom: '10px', display: 'flex', color: '#212121', fontSize: '19px', fontWeight: '500' }}>
                                Cart (4Items)
                                </div>
                            <div style={{ borderBottom: '1px solid #e0e0e0' }}>
                                <div style={{ padding: '10px', paddingTop: '2px', backgroundColor: '#FFFFFF', paddingBottom: '2px', display: 'flex', color: '#FFFFFF' }}>
                                    <div style={{ width: '20%' }}>
                                        <img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} />
                                    </div>
                                    <div style={{ width: '50%' }}>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Macbook Pro 2021 (4 GB/1 TB HDD/DOS) 14q-cs0009TU </div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div>
                                            <img src={cert} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} />

                                        </div>
                                    </div>
                                    <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349</div>
                                </div>
                            </div>
                            <div style={{ borderBottom: '1px solid #e0e0e0' }}>
                                <div style={{ padding: '10px', paddingTop: '25px', backgroundColor: '#FFFFFF', paddingBottom: '25px', display: 'flex', color: '#FFFFFF' }}>
                                    <div style={{ width: '20%' }}>
                                        <img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} />
                                    </div>
                                    <div style={{ width: '50%' }}>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Macbook Pro 2021 (4 GB/1 TB HDD/DOS) 14q-cs0009TU </div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div>
                                            <img src={cert} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} />

                                        </div>
                                    </div>
                                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#212121', marginTop: '10px', padding: '3px' }}>AED 8349</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '100%', backgroundColor: '#FFFFFF' }}>
                            <div style={{ padding: '2%' }}>
                                <div style={{ fontSize: '16px', color: '#212121', width: '90%', fontSize: '19px', fontWeight: '500', padding: '3px' }}>Price Details</div>
                                <div style={{ padding: '2%', width: '100%', display: 'flex' }}>
                                    <div style={{ width: '100%', color: '#212121' }}>Price(4 items)</div>
                                    <div style={{ width: '100%', textAlign: 'right' }}> AED 897</div>
                                </div>
                                <div style={{ padding: '2%', width: '100%', display: 'flex' }}>
                                    <div style={{ width: '100%', color: '#212121' }}>Delivery Charges</div>
                                    <div style={{ width: '100%', textAlign: 'right', color: '#0CAF06', fontSize: '16px', fontWeight: '500' }}> FREE</div>
                                </div>
                                <div><input type='text' style={{ width: '100%', height: '56px', color: 'green', margin: '1%', backgroundColor: '#F4F4F4', border: 'none', borderRadius: '5px' }} placeholder="Coupen code" /></div>
                                <div style={{ padding: '2%', width: '100%', display: 'flex', fontSize: '20px', fontWeight: 'bold' }}>
                                    <div style={{ width: '100%', color: '#212121' }}>Amount Payable</div>
                                    <div style={{ width: '100%', textAlign: 'right' }}> AED 897</div>
                                </div>
                                <div><button style={{ width: '100%', marginBottom: '20px', height: '54px', border: 'none', borderRadius: '5px', backgroundColor: '#CC0000', color: '#FFFFFF', fontWeight: 'bold' }}>Proceed to checkout</button></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
