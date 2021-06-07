import React from 'react'
import bgHome from './bghome2.jpg';
import './newHome.css';
import preview from './preview.jpeg';
import cert from './cert.svg';
import rectangle from './rectangle.png';
import phone from './phone.png';
import care from './care.png';
import gift from './gift.png';
import bigsalelogo from './bigsale.jpg';
import galaxy from './galaxy.png'
import applelogo from './applelogo.png'
import macbook from './macbook.png';
import studentsvg from './student.svg';
import { useHistory } from 'react-router-dom';

export default function HomeContent() {
    const history = useHistory();
    const handleProduct = (value) => {
        history.push('/product' + value);
    }

    const handleCategory = () => {
        history.push('/category')
    }
    return (
        <div>
            <div style={{ marginTop: '10px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div className="containerImage" onClick={() => handleProduct('/product_id')}>
                            <img src={bgHome} alt="Avatar" class="image" style={{ height: '300px', objectFit: 'cover' }} />
                            <div className="overlay"></div>
                            <div className="text">
                                <div style={{ display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>
                                    <div style={{ alignSelf: 'center', height: '100%' }}>
                                        <div style={{ height: '100%' }}>
                                            <div style={{ height: '100%', width: '100%', display: 'flex' }}>
                                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    <img className='phoneImage' src={phone} style={{ width: '100%', height: '100%', alignSelf: "center", padding: '20px', objectFit: 'contain' }} />
                                                </div>
                                                <div style={{ width: '60%', display: 'flex', justifyContent: 'center', marginLeft: '20px' }}>
                                                    <div style={{ alignSelf: 'center', width: '100%' }}>
                                                        <div style={{ fontSize: '53px', fontWeight: '600', }}>iPhone 11</div>
                                                        <div style={{ fontSize: '24px' }}>The right amount to everything</div>
                                                        <div style={{ marginTop: '4%' }}>
                                                            <img src={cert} style={{ height: '36px' }} />
                                                        </div>
                                                        <div style={{ fontSize: '20px', marginTop: '4%' }}>AED 507 <span style={{ textDecoration: 'line-through', fontSize: '14px' }}>AED 599</span></div>
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
            </div>



            <div style={{ height: '181px', width: "100%", marginTop: '10px' }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div style={{ backgroundColor: 'white', height: '100%', width: '100%', display: 'flex' }}>
                            <div style={{ width: '14.2%' }}>

                                <div style={{ textAlign: 'center', height: '100%', width: '100%' }}>
                                    <div style={{ display: 'inline-block', marginTop: '25px' }}>
                                        <div style={{ width: '105px', height: '105px' }}>
                                            <div onClick={handleCategory} style={{ width: '100%', height: '100%', backgroundColor: '#EFEFEF', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                                <img src={macbook} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', marginTop: '10px' }}>Macbooks</div>
                                    </div>
                                </div>

                            </div>

                            <div style={{ width: '14.2%' }}>

                                <div style={{ textAlign: 'center', height: '100%', width: '100%' }}>
                                    <div style={{ display: 'inline-block', marginTop: '25px' }}>
                                        <div style={{ width: '105px', height: '105px' }}>
                                            <div onClick={handleCategory} style={{ width: '100%', height: '100%', backgroundColor: '#EFEFEF', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                                <img src={macbook} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', marginTop: '10px' }}>Macbooks</div>
                                    </div>
                                </div>

                            </div>

                            <div style={{ width: '14.2%' }}>

                                <div style={{ textAlign: 'center', height: '100%', width: '100%' }}>
                                    <div style={{ display: 'inline-block', marginTop: '25px' }}>
                                        <div style={{ width: '105px', height: '105px' }}>
                                            <div onClick={handleCategory} style={{ width: '100%', height: '100%', backgroundColor: '#EFEFEF', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                                <img src={macbook} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', marginTop: '10px' }}>Macbooks</div>
                                    </div>
                                </div>

                            </div>

                            <div style={{ width: '14.2%' }}>

                                <div style={{ textAlign: 'center', height: '100%', width: '100%' }}>
                                    <div style={{ display: 'inline-block', marginTop: '25px' }}>
                                        <div style={{ width: '105px', height: '105px' }}>
                                            <div onClick={handleCategory} style={{ width: '100%', height: '100%', backgroundColor: '#EFEFEF', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                                <img src={macbook} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', marginTop: '10px' }}>Macbooks</div>
                                    </div>
                                </div>

                            </div>

                            <div style={{ width: '14.2%' }}>

                                <div style={{ textAlign: 'center', height: '100%', width: '100%' }}>
                                    <div style={{ display: 'inline-block', marginTop: '25px' }}>
                                        <div style={{ width: '105px', height: '105px' }}>
                                            <div onClick={handleCategory} style={{ width: '100%', height: '100%', backgroundColor: '#EFEFEF', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                                <img src={macbook} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', marginTop: '10px' }}>Macbooks</div>
                                    </div>
                                </div>

                            </div>

                            <div style={{ width: '14.2%' }}>

                                <div style={{ textAlign: 'center', height: '100%', width: '100%' }}>
                                    <div style={{ display: 'inline-block', marginTop: '25px' }}>
                                        <div style={{ width: '105px', height: '105px' }}>
                                            <div onClick={handleCategory} style={{ width: '100%', height: '100%', backgroundColor: '#EFEFEF', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                                <img src={macbook} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', marginTop: '10px' }}>Macbooks</div>
                                    </div>
                                </div>

                            </div>

                            <div style={{ width: '14.2%' }}>

                                <div style={{ textAlign: 'center', height: '100%', width: '100%' }}>
                                    <div style={{ display: 'inline-block', marginTop: '25px' }}>
                                        <div style={{ width: '105px', height: '105px' }}>
                                            <div onClick={handleCategory} style={{ width: '100%', height: '100%', backgroundColor: '#EFEFEF', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                                <img src={macbook} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', marginTop: '10px' }}>Macbooks</div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div style={{ background: 'white', height: '445px' }}>
                            <div style={{ background: 'white', padding: '20px' }}>
                                <div style={{ fontWeight: '500', fontSize: '19px' }}><span style={{ marginLeft: '16px', position: 'relative', top: '8px' }}>Deals of the Day</span><span style={{ float: 'right', position: 'relative', top: '8px' }} onClick={handleProduct}>View All</span></div>
                            </div>

                            <div style={{ height: '1px', background: '#e0e0e0' }}>

                            </div>

                            <div style={{ background: 'white', padding: '15px', display: 'flex' }} onClick={() => handleProduct('/product_id')}>
                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                                            <div class="progress" style={{ height: "7px", width: '90%' }}>
                                                <div style={{ background: '#4AC426' }} class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div style={{ fontSize: '12px', padding: '3px', marginTop: '5px' }}>7 hours left</div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                                            <div class="progress" style={{ height: "7px", width: '90%' }}>
                                                <div style={{ background: '#4AC426' }} class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div style={{ fontSize: '16px', padding: '3px', marginTop: '5px' }}>7 hours left</div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                                            <div class="progress" style={{ height: "7px", width: '90%' }}>
                                                <div style={{ background: '#4AC426' }} class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div style={{ fontSize: '16px', padding: '3px', marginTop: '5px' }}>7 hours left</div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                                            <div class="progress" style={{ height: "7px", width: '90%' }}>
                                                <div style={{ background: '#4AC426' }} class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div style={{ fontSize: '16px', padding: '3px', marginTop: '5px' }}>7 hours left</div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                                            <div class="progress" style={{ height: "7px", width: '90%' }}>
                                                <div style={{ background: '#4AC426' }} class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div style={{ fontSize: '16px', padding: '3px', marginTop: '5px' }}>7 hours left</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div style={{ width: '100%', display: 'flex' }}>

                            <div style={{ width: '33.3%' }}>
                                <div style={{ margin: '3%', marginLeft: '0px' }}>
                                    <div style={{ display: 'flex', background: 'white', padding: '10px', borderRadius: '4px', height: '265px', width: '100%' }}>

                                        <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                            <img src={studentsvg} style={{ alignSelf: 'center', width: '100%', height: '100%', objectFit: 'contain' }} />

                                        </div>
                                        <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                                <div style={{ fontWeight: '600', fontSize: '19px' }}>For Students</div>
                                                <div style={{ fontSize: '17px', marginTop: '2px' }}>1400+ products</div>
                                                <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '120px', height: '45px' }}>Shop Now</button></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div style={{ width: '33.3%' }}>
                                <div style={{ margin: '3%' }}>
                                    <div style={{ display: 'flex', background: 'white', padding: '10px', borderRadius: '4px', height: '265px', width: '100%' }}>

                                        <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                            <img src={studentsvg} style={{ alignSelf: 'center', width: '100%', height: '100%', objectFit: 'contain' }} />

                                        </div>
                                        <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                                <div style={{ fontWeight: '600', fontSize: '19px' }}>For Professionals</div>
                                                <div style={{ fontSize: '17px', marginTop: '2px' }}>1400+ products</div>
                                                <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '120px', height: '45px' }}>Shop Now</button></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ width: '33.3%' }}>
                                <div style={{ margin: '3%', marginRight: '0px' }}>
                                    <div style={{ display: 'flex', background: 'white', padding: '10px', borderRadius: '4px', height: '265px', width: '100%' }}>

                                        <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                            <img src={studentsvg} style={{ alignSelf: 'center', width: '100%', height: '100%', objectFit: 'contain' }} />

                                        </div>
                                        <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                                <div style={{ fontWeight: '600', fontSize: '19px' }}>Work From  Home</div>
                                                <div style={{ fontSize: '17px', marginTop: '2px' }}>1400+ products</div>
                                                <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '120px', height: '45px' }}>Shop Now</button></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>



            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div style={{ background: 'white' }}>
                            <div style={{ background: 'white', padding: '20px' }}>
                                <div style={{ fontWeight: '500', fontSize: '19px' }}><span style={{ marginLeft: '16px', position: 'relative', top: '8px' }}>For iPhone Lovers</span><span style={{ float: 'right', position: 'relative', top: '8px' }} onClick={handleProduct}>View All</span></div>
                            </div>

                            <div style={{ height: '1px', background: '#e0e0e0' }}>

                            </div>

                            <div style={{ background: 'white', padding: '15px', display: 'flex' }}>
                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            



            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div style={{ background: 'white' }}>
                            <div style={{ background: 'white', padding: '20px' }}>
                                <div style={{ fontWeight: '500', fontSize: '19px' }}><span style={{ marginLeft: '16px', position: 'relative', top: '8px' }}>Newly Added Products</span><span style={{ float: 'right', position: 'relative', top: '8px' }} onClick={handleProduct}>View All</span></div>
                            </div>

                            <div style={{ height: '1px', background: '#e0e0e0' }}>

                            </div>

                            <div style={{ background: 'white', padding: '15px', display: 'flex' }}>
                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', width: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div style={{ display: 'flex', paddingTop: '10px', paddingBottom: '10px', width: '100%', backgroundColor: '#f56743', borderRadius: '10px', height: '170px', border: '6px solid white' }}>

                            <div style={{ width: '30%', marginRight: '0', display: 'flex', justifyContent: 'center' }}>
                                <img style={{ width: '100%', height: '100%', alignSelf: 'center', objectFit: 'contain', objectPosition: 'right' }} src={preview} alt="Card image cap" />
                            </div>

                            <div style={{ width: '40%', display: 'flex', justifyContent: 'flex-start' }}>
                                <div style={{ alignSelf: 'center', width: '100%', textAlign: 'Left', marginLeft: "20%" }}>
                                    <div style={{ fontSize: '28px', fontWeight: 'bold' }}>Phone everyone wants</div>
                                    <div style={{ fontSize: '20px' }}>Apple samsung oneplus</div>
                                    <img src={cert} style={{ marginTop: '10px' }} />
                                </div>
                            </div>
                            <div style={{ width: '30%', marginRight: '0', display: 'flex', justifyContent: 'center' }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div style={{ background: 'white' }}>
                            <div style={{ background: 'white', padding: '20px' }}>
                                <div style={{ fontWeight: '500', fontSize: '19px' }}><span style={{ marginLeft: '16px', position: 'relative', top: '8px' }}>Top Picks</span><span style={{ float: 'right', position: 'relative', top: '8px' }} onClick={handleProduct}>View All</span></div>
                            </div>

                            <div style={{ height: '1px', background: '#e0e0e0' }}>

                            </div>

                            <div style={{ background: 'white', padding: '15px', display: 'flex' }}>
                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div style={{ background: 'white' }}>
                            <div style={{ background: 'white', padding: '20px' }}>
                                <div style={{ fontWeight: '500', fontSize: '19px' }}><span style={{ marginLeft: '16px', position: 'relative', top: '8px' }}>Most Bought Products</span><span style={{ float: 'right', position: 'relative', top: '8px' }} onClick={handleProduct}>View All</span></div>
                            </div>

                            <div style={{ height: '1px', background: '#e0e0e0' }}>

                            </div>

                            <div style={{ background: 'white', padding: '15px', display: 'flex' }}>
                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "20%" }}>
                                    <div>
                                        <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                            <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px', objectFit: 'contain' }} /></div>
                                            <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '16px', padding: '3px' }}>Apple iPhone 11</div>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px', paddingBottom: '15px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>

                        <div style={{ display: 'flex', width: '100%', height: "100%", borderRadius: '4px' }}>


                            <div style={{ width: '32%' }}>
                                <div style={{ height: '100%', width: '100%', }}>
                                    <div style={{ width: '100%', height: '100%' }}>
                                        <img src={galaxy} style={{ borderRadius: '8px', width: "100%", height: '100%' }} />
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '2%' }}></div>
                            <div style={{ width: '32%' }}>
                                <div style={{ height: '100%', width: '100%' }}>
                                    <div style={{ width: '100%', height: '100%' }}>
                                        <img src={galaxy} style={{ borderRadius: '8px', width: "100%", height: '100%', objectFit: 'contain' }} />
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '2%' }}></div>
                            <div style={{ width: '32%' }}>
                                <div style={{ height: '100%', width: '100%' }}>
                                    <div style={{ width: '100%', height: '100%' }}>
                                        <img src={galaxy} style={{ borderRadius: '8px', width: "100%", height: '100%', objectFit: 'contain' }} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: "181px", backgroundColor: "#FFFFFF", }}>

                            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
                                <div style={{ alignSelf: 'center', height: '119px', width: '100%', display: 'flex' }}>
                                    <div style={{ width: '16.6%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ alignSelf: 'center', width: '100%', height: '100%', padding: '20px' }}>
                                            <img src={applelogo} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                                        </div>
                                    </div>
                                    <div style={{ width: '16.6%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ alignSelf: 'center', width: '100%', height: '100%', padding: '20px' }}>
                                            <img src={applelogo} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                                        </div>
                                    </div>
                                    <div style={{ width: '16.6%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ alignSelf: 'center', width: '100%', height: '100%', padding: '20px' }}>
                                            <img src={applelogo} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                                        </div>
                                    </div>
                                    <div style={{ width: '16.6%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ alignSelf: 'center', width: '100%', height: '100%', padding: '20px' }}>
                                            <img src={applelogo} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                                        </div>
                                    </div>
                                    <div style={{ width: '16.6%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ alignSelf: 'center', width: '100%', height: '100%', padding: '20px' }}>
                                            <img src={applelogo} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                                        </div>
                                    </div>
                                    <div style={{ width: '16.6%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ alignSelf: 'center', width: '100%', height: '100%', padding: '20px' }}>
                                            <img src={applelogo} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >





    )
}
