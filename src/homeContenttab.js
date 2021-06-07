import React from 'react'
import header from './header.jpeg';
import bgHome from './bghome.jpg';
import './newHome.css';
import preview from './preview.jpeg';
import cert from './cert.svg';
import student from './student.jpeg';
import rectangle from './rectangle.png';
import phone from './phone.png';
import circle from './circle.png'
import biggerCircle from './biggercircle.png';
import care from './care.png';
import dot from './dot.png'
import shadow from './shadow.png'
import gift from './gift.png';
import bigsalelogo from './bigsale.jpg';
import delivery from './delivery.png';
import galaxy from './galaxy.png'
import applelogo from './applelogo.png'
import huawei from './huawei.png';
import samsung from './samsung1.png';
import macbook from './macbook.png';
export default function HomeContenttab() {
    return (
        <div>
            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '4%', paddingRight: '4%' }}>
                        <div className="containerImage">
                            <img src={bgHome} alt="Avatar" class="image" style={{ height: '100%', objectFit: 'cover' }} />
                            <div className="overlay"></div>
                            <div className="text">
                                <div style={{ width: '20%' }}>

                                </div>

                                <div style={{ height: '100%', width: '80%', display: 'flex' }}>
                                    <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'flex-start' }}>
                                        <img className='phoneImage' src={phone} style={{ width: '100%', height: '100%', alignSelf: "center", padding: '20px', objectFit: 'contain' }} />
                                    </div>

                                    <div style={{ width: '60%', display: 'flex', justifyContent: 'flex-start' }}>
                                        <div style={{ alignSelf: 'center', width: '100%' }}>
                                            <div style={{ fontSize: '36px', fontWeight: '600', padding: '1%' }}>iPhone 11</div>
                                            <div style={{ fontSize: '20px', padding: '1%' }}>The right amount to everything</div>
                                            <div style={{ padding: '1%' }}>
                                                <img src={cert} />
                                            </div>
                                            <div style={{ fontSize: '20px', padding: '1%' }}>AED 507 <span style={{ textDecoration: 'line-through', fontSize: '14px' }}>AED 599</span></div>

                                        </div>



                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ width: "100%", marginTop: '10px', height: '117px' }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '4%', paddingRight: '4%  ' }}>
                        <div style={{ background: 'white', height: '100%', display: 'flex' }}>
                            <div style={{ width: '25%', height: '100%', display: 'flex' }}>
                                <div style={{ width: '40%' }}>
                                    <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ width: '70px', height: '70px', alignSelf: 'center', padding: '10px' }}>
                                            <div style={{ width: '100%', height: '100%', backgroundColor: '#e0e0e0', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                                <img src={delivery} style={{ alignSelf: "center", objectPosition: 'right', objectFit: 'contain', height: '60%', width: '60%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '50%' }}>
                                    <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ alignSelf: 'center' }}>
                                            <div style={{ fontWeight: '600', fontSize: '14px' }}>Satisfied or Refunded</div>
                                            <div style={{ fontSize: '10px', color: 'grey' }}>7 Days free returns</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '10%' }}></div>
                            </div>

                            <div style={{ width: '25%', height: '100%', display: 'flex' }}>
                                <div style={{ width: '40%' }}>
                                    <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ width: '70px', height: '70px', alignSelf: 'center', padding: '10px' }}>
                                            <div style={{ width: '100%', height: '100%', backgroundColor: '#e0e0e0', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                                <img src={delivery} style={{ alignSelf: "center", objectPosition: 'right', objectFit: 'contain', height: '60%', width: '60%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '50%' }}>
                                    <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ alignSelf: 'center' }}>
                                            <div style={{ fontWeight: '600', fontSize: '14px' }}>Satisfied or Refunded</div>
                                            <div style={{ fontSize: '10px', color: 'grey' }}>7 Days free returns</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '10%' }}></div>
                            </div>

                            <div style={{ width: '25%', height: '100%', display: 'flex' }}>
                                <div style={{ width: '40%' }}>
                                    <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ width: '70px', height: '70px', alignSelf: 'center', padding: '10px' }}>
                                            <div style={{ width: '100%', height: '100%', backgroundColor: '#e0e0e0', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                                <img src={delivery} style={{ alignSelf: "center", objectPosition: 'right', objectFit: 'contain', height: '60%', width: '60%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '50%' }}>
                                    <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ alignSelf: 'center' }}>
                                            <div style={{ fontWeight: '600', fontSize: '14px' }}>Satisfied or Refunded</div>
                                            <div style={{ fontSize: '10px', color: 'grey' }}>7 Days free returns</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '10%' }}></div>
                            </div>

                            <div style={{ width: '25%', height: '100%', display: 'flex' }}>
                                <div style={{ width: '40%' }}>
                                    <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ width: '70px', height: '70px', alignSelf: 'center', padding: '10px' }}>
                                            <div style={{ width: '100%', height: '100%', backgroundColor: '#e0e0e0', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                                <img src={delivery} style={{ alignSelf: "center", objectPosition: 'right', objectFit: 'contain', height: '60%', width: '60%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '50%' }}>
                                    <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ alignSelf: 'center' }}>
                                            <div style={{ fontWeight: '600', fontSize: '14px' }}>Satisfied or Refunded</div>
                                            <div style={{ fontSize: '10px', color: 'grey' }}>7 Days free returns</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '10%' }}></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: '181px', width: "100%", marginTop: '10px' }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '4%', paddingRight: '4%' }}>
                        <div style={{ backgroundColor: 'white', height: '100%', width: '100%', display: 'flex' }}>
                            <div style={{ width: '8%' }}></div>
                            <div style={{ width: '12%' }}>
                                <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ width: '90px', height: '90px', alignSelf: 'center', padding: '10px' }}>
                                        <div style={{ width: '100%', height: '100%', backgroundColor: '#e0e0e0', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                            <img src={macbook} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                        </div>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', marginTop: '10px' }}>Macbooks</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '12%' }}>
                                <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ width: '90px', height: '90px', alignSelf: 'center', padding: '10px' }}>
                                        <div style={{ width: '100%', height: '100%', backgroundColor: '#e0e0e0', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                            <img src={macbook} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                        </div>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', marginTop: '10px' }}>Macbooks</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '12%' }}>
                                <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ width: '90px', height: '90px', alignSelf: 'center', padding: '10px' }}>
                                        <div style={{ width: '100%', height: '100%', backgroundColor: '#e0e0e0', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                            <img src={macbook} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                        </div>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', marginTop: '10px' }}>Macbooks</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '12%' }}>
                                <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ width: '90px', height: '90px', alignSelf: 'center', padding: '10px' }}>
                                        <div style={{ width: '100%', height: '100%', backgroundColor: '#e0e0e0', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                            <img src={macbook} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                        </div>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', marginTop: '10px' }}>Macbooks</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '12%' }}>
                                <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ width: '90px', height: '90px', alignSelf: 'center', padding: '10px' }}>
                                        <div style={{ width: '100%', height: '100%', backgroundColor: '#e0e0e0', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                            <img src={macbook} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                        </div>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', marginTop: '10px' }}>Macbooks</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '12%' }}>
                                <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ width: '90px', height: '90px', alignSelf: 'center', padding: '10px' }}>
                                        <div style={{ width: '100%', height: '100%', backgroundColor: '#e0e0e0', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                            <img src={macbook} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                        </div>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', marginTop: '10px' }}>Macbooks</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '12%' }}>
                                <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ width: '90px', height: '90px', alignSelf: 'center', padding: '10px' }}>
                                        <div style={{ width: '100%', height: '100%', backgroundColor: '#e0e0e0', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                            <img src={macbook} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
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
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '4%', paddingRight: '4%' }}>
                        <div style={{ background: 'white', padding: '15px' }}>
                            <div style={{ fontWeight: '500' }}>Deals of the Day<span style={{ float: 'right' }}>View All</span></div>
                        </div>

                        <div style={{ height: '1px', background: '#e0e0e0' }}>

                        </div>

                        <div style={{ background: 'white', padding: '15px', display: 'flex' }}>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                                        <div class="progress" style={{ height: "7px", width: '90%' }}>
                                            <div style={{ background: 'green' }} class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div style={{ fontSize: '12px', padding: '3px', marginTop: '5px' }}>7 hours left</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                                        <div class="progress" style={{ height: "7px", width: '90%' }}>
                                            <div style={{ background: 'green' }} class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div style={{ fontSize: '12px', padding: '3px', marginTop: '5px' }}>7 hours left</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                                        <div class="progress" style={{ height: "7px", width: '90%' }}>
                                            <div style={{ background: 'green' }} class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div style={{ fontSize: '12px', padding: '3px', marginTop: '5px' }}>7 hours left</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                                        <div class="progress" style={{ height: "7px", width: '90%' }}>
                                            <div style={{ background: 'green' }} class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div style={{ fontSize: '12px', padding: '3px', marginTop: '5px' }}>7 hours left</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                                        <div class="progress" style={{ height: "7px", width: '90%' }}>
                                            <div style={{ background: 'green' }} class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div style={{ fontSize: '12px', padding: '3px', marginTop: '5px' }}>7 hours left</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '4%', paddingRight: '4%' }}>
                        <div style={{ width: '100%', display: 'flex' }}>

                            <div style={{ width: '33.3%' }}>
                                <div style={{ margin: '3%', marginLeft: '0px' }}>
                                    <div style={{ display: 'flex', background: 'white', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                                        <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                            <img src={student} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                                        </div>
                                        <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                                <div style={{ fontWeight: '600', fontSize: '16px' }}>For Students</div>
                                                <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                                <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600' }}>Shop Now</button></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ width: '33.3%' }}>
                                <div style={{ margin: '3%' }}>
                                    <div style={{ display: 'flex', background: 'white', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                                        <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                            <img src={student} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                                        </div>
                                        <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                                <div style={{ fontWeight: '600', fontSize: '16px' }}>For Students</div>
                                                <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                                <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600' }}>Shop Now</button></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ width: '33.3%' }}>
                                <div style={{ margin: '3%', marginRight: '0px' }}>
                                    <div style={{ display: 'flex', background: 'white', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                                        <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                            <img src={student} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                                        </div>
                                        <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                                <div style={{ fontWeight: '600', fontSize: '16px' }}>For Students</div>
                                                <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                                <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600' }}>Shop Now</button></div>
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
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '4%', paddingRight: '4%' }}>
                        <div style={{ background: 'white', padding: '15px' }}>
                            <div style={{ fontWeight: '500' }}>For iPhone Lovers<span style={{ float: 'right' }}>View All</span></div>
                        </div>

                        <div style={{ height: '1px', background: '#e0e0e0' }}>

                        </div>

                        <div style={{ background: 'white', padding: '15px', display: 'flex' }}>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div style={{ marginTop: '20px', width: "100%", height: '77px' }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', width: '100%', paddingLeft: '4%', paddingRight: '4%' }}>
                        <div style={{ background: '#3554F6', backgroundImage: `url(${rectangle})`, height: '77px' }}>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '4%', paddingRight: '4%' }}>
                        <div style={{ background: 'white', padding: '15px' }}>
                            <div style={{ fontWeight: '500' }}>For iPhone Lovers<span style={{ float: 'right' }}>View All</span></div>
                        </div>

                        <div style={{ height: '1px', background: '#e0e0e0' }}>

                        </div>

                        <div style={{ background: 'white', padding: '15px', display: 'flex' }}>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', width: '100%', margin: 'auto', paddingLeft: '4%', paddingRight: '4%' }}>
                        <div style={{ display: 'flex', paddingTop: '10px', paddingBottom: '10px', width: '100%', backgroundColor: '#FFBA05', height: '140px' }}>

                            <div style={{ width: '30%', marginRight: '0', display: 'flex', justifyContent: 'center' }}>
                                <img style={{ width: '100%', height: '100%', alignSelf: 'center', objectFit: 'contain', objectPosition: 'right' }} src={preview} alt="Card image cap" />
                            </div>

                            <div style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '100%', textAlign: 'Left', marginLeft: "20%" }}>
                                    <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Phone everyone wants</div>
                                    <div style={{ fontSize: '12px' }}>Apple samsung oneplus</div>
                                    <img src={cert} style={{ marginTop: '10px' }} />
                                </div>
                            </div>
                            <div style={{ width: '40%', marginRight: '0', display: 'flex', justifyContent: 'center' }}>
                                <img style={{ width: '100%', height: '100%', alignSelf: 'center', objectFit: 'contain', objectPosition: 'left' }} src={bigsalelogo} alt="Card image cap" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '4%', paddingRight: '4%' }}>
                        <div style={{ background: 'white', padding: '15px' }}>
                            <div style={{ fontWeight: '500' }}>For iPhone Lovers<span style={{ float: 'right' }}>View All</span></div>
                        </div>

                        <div style={{ height: '1px', background: '#e0e0e0' }}>

                        </div>

                        <div style={{ background: 'white', padding: '15px', display: 'flex' }}>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '4%', paddingRight: '4%' }}>
                        <div style={{ background: 'white', padding: '15px' }}>
                            <div style={{ fontWeight: '500' }}>For iPhone Lovers<span style={{ float: 'right' }}>View All</span></div>
                        </div>

                        <div style={{ height: '1px', background: '#e0e0e0' }}>

                        </div>

                        <div style={{ background: 'white', padding: '15px', display: 'flex' }}>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <div>
                                    <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                        <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                        <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Wow Certified</div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '4%', paddingRight: '4%' }}>
                        <div style={{ display: 'flex', width: '100%', height: "100%", borderRadius: '4px', }}>


                            <div style={{ width: '33.3%', margin: '3%', marginLeft: '0px' }}>
                                <div>
                                    <div style={{ borderRadius: '4px', width: '100%' }}>
                                        <img src={galaxy} style={{ width: "100%", height: '100%', objectFit: 'contain' }} />
                                    </div>
                                </div>
                            </div>

                            <div style={{ width: '33.3%', margin: '3%' }}>
                                <div>
                                    <div style={{ borderRadius: '4px', width: '100%' }}>
                                        <img src={galaxy} style={{ width: "100%", height: '100%', objectFit: 'contain' }} />
                                    </div>
                                </div>
                            </div>

                            <div style={{ width: '33.3%', margin: '3%', marginRight: '0px' }}>
                                <div>
                                    <div style={{ borderRadius: '4px', width: '100%' }}>
                                        <img src={galaxy} style={{ width: "100%", height: '100%', objectFit: 'contain' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '4%', paddingRight: '4%' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: "100%", backgroundColor: "#FFFFFF", }}>
                            <div style={{ width: '16.6%', height: '119px', border: 'none' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                            <div style={{ width: '16.6%', height: '119px', border: 'none', }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', backgroundColor: "#FFFFFF", paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                            <div style={{ width: '16.6%', height: '119px', border: 'none', }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', backgroundColor: "#FFFFFF", paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                            <div style={{ width: '16.6%', height: '119px', border: 'none', }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', backgroundColor: "#FFFFFF", paddingTop: '20px' }} >
                                    <img src={samsung} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                            <div style={{ width: '16.6%', height: '119px', border: 'none', }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', backgroundColor: "#FFFFFF", paddingTop: '20px' }} >
                                    <img src={huawei} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                            <div style={{ width: '16.6%', height: '119px', border: 'none', }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', backgroundColor: "#FFFFFF", paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >





    )
}
