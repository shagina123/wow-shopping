import React from 'react';
import catImg from './catImg.png';
import add1 from './add1.png';
import samsung from './samsung.jpg';
import preview from './preview.jpeg';
export default function Category() {
    return (

        <div className="categoryContainer" style={{ height: "100%", width: "100%", backgroundColor: '#F1F3F6' }}>
            <div style={{ height: "100%", width: "100%", marginTop: '10px' }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '4%', paddingRight: '4%' }}>
                        <div style={{ backgroundColor: '#FFFFFF', margin: 'auto', borderRadius: '4px' }}>
                            <img src={catImg} style={{ border:'10px solid white',height: '100%', width: '100%', objectFit:'contain'}} />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px', width: '100%', height: "100%", borderRadius: '4px', paddingLeft: "4%", paddingRight: '4%' }}>
                <div style={{ width: '33.3%', border: 'none', borderRadius: '4px' }}>
                    <div style={{ margin: '10px', margin: '10px', marginLeft: '0px' }}>
                        <div style={{ width: '100%', border: 'none', position: 'relative', borderRadius: '4px' }} >
                            <img src={add1} style={{ height: '100%', border: '8px solid white', width: '100%', objectFit: 'contain' }} />
                            <button style={{ position: 'absolute', top: '35%', left: '7%', height: '27px', width: '30%', backgroundColor: "#FFFFFF", fontSize: '16', fontWeight: 'bold', border: 'none', borderRadius: '5%', paddingTop: '6px' }}>AED 1123</button>
                        </div>
                    </div>
                </div>
                <div style={{ width: '33.3%', border: 'none', borderRadius: '4px' }}>
                    <div style={{ margin: '10px' }}>
                        <div style={{ width: '100%', border: 'none', position: 'relative', borderRadius: '4px' }} >
                            <img src={add1} style={{ height: '100%', border: '8px solid white', width: '100%', objectFit: 'contain' }} />
                            <button style={{ position: 'absolute', top: '35%', left: '7%', height: '27px', width: '30%', backgroundColor: "#FFFFFF", fontSize: '16', fontWeight: 'bold', border: 'none', borderRadius: '5%', paddingTop: '6px' }}>AED 1123</button>
                        </div>
                    </div>
                </div>

                <div style={{ width: '33.3%', border: 'none', borderRadius: '4px' }}>
                    <div style={{ margin: '10px', marginRight: '0px' }}>
                        <div style={{ width: '100%', border: 'none', position: 'relative', borderRadius: '4px' }} >
                            <img src={add1} style={{ height: '100%', border: '8px solid white', width: '100%', objectFit: 'contain' }} />
                            <button style={{ position: 'absolute', top: '35%', left: '7%', height: '27px', width: '30%', backgroundColor: "#FFFFFF", fontSize: '16', fontWeight: 'bold', border: 'none', borderRadius: '5%', paddingTop: '6px' }}>AED 1123</button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: "100%", borderRadius: '4px', paddingLeft: "4%", paddingRight: '4%' }}>
                <div style={{ width: '33.3%', height: '253px' }}>
                    <div style={{ margin: '10px', marginLeft: '0px' }}>
                        <div style={{ display: 'flex', background: '#EAEAEA', border: '8px solid white', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                            <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                <img src={samsung} style={{ alignSelf: 'center', width: '100%', height: '100%', objectFit: 'contain' }} />

                            </div>
                            <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                    <div style={{ fontWeight: '600', fontSize: '20px' }}>Samsung S8</div>
                                    <div style={{ fontSize: '20px', marginTop: '2px' }}>(64GB | 64GB)</div>
                                    <div style={{ fontSize: '14px', marginTop: '2px' }}>6MP Quad Cam | 6.5'FHD+</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '80%' }}>Shop Now</button></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ width: '33.3%', height: '253px' }}>
                    <div style={{ margin: '10px' }}>
                        <div style={{ display: 'flex', background: '#EAEAEA', border: '8px solid white', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                            <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                <img src={samsung} style={{ alignSelf: 'center', width: '100%', height: '100%', objectFit: 'contain' }} />

                            </div>
                            <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                    <div style={{ fontWeight: '600', fontSize: '20px' }}>Samsung S8</div>
                                    <div style={{ fontSize: '20px', marginTop: '2px' }}>(64GB | 64GB)</div>
                                    <div style={{ fontSize: '14px', marginTop: '2px' }}>6MP Quad Cam | 6.5'FHD+</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '80%' }}>Shop Now</button></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div style={{ width: '33.3%', height: '253px', border: 'none' }}>
                    <div style={{ margin: '10px', marginRight: '0px' }}>
                        <div style={{ display: 'flex', background: '#EAEAEA', border: '8px solid white', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                            <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                <img src={samsung} style={{ alignSelf: 'center', width: '100%', height: '100%', objectFit: 'contain' }} />

                            </div>
                            <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                    <div style={{ fontWeight: '600', fontSize: '20px' }}>Samsung S8</div>
                                    <div style={{ fontSize: '20px', marginTop: '2px' }}>(64GB | 64GB)</div>
                                    <div style={{ fontSize: '14px', marginTop: '2px' }}>6MP Quad Cam | 6.5'FHD+</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '80%' }}>Shop Now</button></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '4%', paddingRight: '4%' }}>
                        <div style={{ background: 'white', padding: '15px', display: 'flex' }}>
                            <div style={{ fontSize: '19px', fontWeight: '500', width: '50%', paddingTop: '0px' }}>Top Picks  </div>
                            <div style={{ fontSize: '19px', right: '0', width: '50%', marginRight: '0', textAlign: 'right', paddingTop: '0px', fontWeight: '500', width: '100%' }}>View All</div>

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

            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px', width: '100%', height: "100%", borderRadius: '4px', paddingLeft: "4%", paddingRight: '4%' }}>
                <div style={{ width: '33.3%', border: 'none', borderRadius: '4px' }}>
                    <div style={{ margin: '10px', margin: '10px', marginLeft: '0px' }}>
                        <div style={{ width: '100%', border: 'none', position: 'relative', borderRadius: '4px' }} >
                            <img src={add1} style={{ height: '100%', border: '8px solid white', width: '100%', objectFit: 'contain' }} />
                            <button style={{ position: 'absolute', top: '35%', left: '7%', height: '27px', width: '30%', backgroundColor: "#FFFFFF", fontSize: '16', fontWeight: 'bold', border: 'none', borderRadius: '5%', paddingTop: '6px' }}>AED 1123</button>
                        </div>
                    </div>
                </div>
                <div style={{ width: '33.3%', border: 'none', borderRadius: '4px' }}>
                    <div style={{ margin: '10px' }}>
                        <div style={{ width: '100%', border: 'none', position: 'relative', borderRadius: '4px' }} >
                            <img src={add1} style={{ height: '100%', border: '8px solid white', width: '100%', objectFit: 'contain' }} />
                            <button style={{ position: 'absolute', top: '35%', left: '7%', height: '27px', width: '30%', backgroundColor: "#FFFFFF", fontSize: '16', fontWeight: 'bold', border: 'none', borderRadius: '5%', paddingTop: '6px' }}>AED 1123</button>
                        </div>
                    </div>
                </div>

                <div style={{ width: '33.3%', border: 'none', borderRadius: '4px' }}>
                    <div style={{ margin: '10px', marginRight: '0px' }}>
                        <div style={{ width: '100%', border: 'none', position: 'relative', borderRadius: '4px' }} >
                            <img src={add1} style={{ height: '100%', border: '8px solid white', width: '100%', objectFit: 'contain' }} />
                            <button style={{ position: 'absolute', top: '35%', left: '7%', height: '27px', width: '30%', backgroundColor: "#FFFFFF", fontSize: '16', fontWeight: 'bold', border: 'none', borderRadius: '5%', paddingTop: '6px' }}>AED 1123</button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: "100%", borderRadius: '4px', paddingLeft: "4%", paddingRight: '4%' }}>
                <div style={{ width: '33.3%', height: '253px' }}>
                    <div style={{ margin: '10px', marginLeft: '0px' }}>
                        <div style={{ display: 'flex', background: '#EAEAEA', border: '8px solid white', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                            <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                <img src={samsung} style={{ alignSelf: 'center', width: '100%', height: '100%', objectFit: 'contain' }} />

                            </div>
                            <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                    <div style={{ fontWeight: '600', fontSize: '20px' }}>Samsung S8</div>
                                    <div style={{ fontSize: '20px', marginTop: '2px' }}>(64GB | 64GB)</div>
                                    <div style={{ fontSize: '14px', marginTop: '2px' }}>6MP Quad Cam | 6.5'FHD+</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '80%' }}>Shop Now</button></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ width: '33.3%', height: '253px' }}>
                    <div style={{ margin: '10px' }}>
                        <div style={{ display: 'flex', background: '#EAEAEA', border: '8px solid white', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                            <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                <img src={samsung} style={{ alignSelf: 'center', width: '100%', height: '100%', objectFit: 'contain' }} />

                            </div>
                            <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                    <div style={{ fontWeight: '600', fontSize: '20px' }}>Samsung S8</div>
                                    <div style={{ fontSize: '20px', marginTop: '2px' }}>(64GB | 64GB)</div>
                                    <div style={{ fontSize: '14px', marginTop: '2px' }}>6MP Quad Cam | 6.5'FHD+</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '80%' }}>Shop Now</button></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div style={{ width: '33.3%', height: '253px', border: 'none' }}>
                    <div style={{ margin: '10px', marginRight: '0px' }}>
                        <div style={{ display: 'flex', background: '#EAEAEA', border: '8px solid white', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                            <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                <img src={samsung} style={{ alignSelf: 'center', width: '100%', height: '100%', objectFit: 'contain' }} />

                            </div>
                            <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                    <div style={{ fontWeight: '600', fontSize: '20px' }}>Samsung S8</div>
                                    <div style={{ fontSize: '20px', marginTop: '2px' }}>(64GB | 64GB)</div>
                                    <div style={{ fontSize: '14px', marginTop: '2px' }}>6MP Quad Cam | 6.5'FHD+</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '80%' }}>Shop Now</button></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '4%', paddingRight: '4%' }}>
                        <div style={{ background: 'white', padding: '15px', display: 'flex' }}>
                            <div style={{ fontSize: '19px', fontWeight: '500', width: '50%', paddingTop: '0px' }}>Top Picks  </div>
                            <div style={{ fontSize: '19px', right: '0', width: '50%', marginRight: '0', textAlign: 'right', paddingTop: '0px', fontWeight: '500', width: '100%' }}>View All</div>

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
        </div>

    )
}