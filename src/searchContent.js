import React from 'react'
import preview from './preview.jpeg';
import airpod from './airpod.jpg';
import { useHistory } from 'react-router-dom';

export default function SearchContent() {
    const history = useHistory();
    const handleProduct = (value) => {
        history.push('/product'+value);
    }

    return (
        <div className='searchContainer'>
            <div className='searchContent'>
          
                <div className='Resultsort'>
                 
                    <div style={{ display: 'flex' }}>
                        <div style={{ fontSize: '16px', color: 'black', fontWeight: '600', padding: '3px' }}>110,486 Results</div>
                        <div style={{ fontSize: '16px', color: 'black', fontWeight: '600', padding: '3px', paddingLeft: '15px' }}>iphone</div>
                    </div>
                    <div style={{ display: 'flex', width: '50%', marginTop: '10px' }}>
                        <div style={{ padding: '3px', fontSize: '14px', width: '25%', background: 'green', color: 'white', border: '1px solid #e0e0e0', textAlign: 'center' }}><div style={{ margin: 'auto' }}>All Listing</div></div>
                        <div style={{ padding: '3px', fontSize: '14px', width: '25%', background: 'white', color: 'black', border: '1px solid #e0e0e0', textAlign: 'center' }}><div style={{ margin: 'auto' }}>Certified</div></div>
                     
                    </div>
                </div>

                <div className='results'>
                    <div style={{ width: "25%" }} onClick={()=>handleProduct('/product_id')}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '20px',objectFit:'contain'}} /></div>
                                <div style={{ color: 'black', fontWeight: '500', marginTop: '20px', fontSize: '16px'}}>Apple iPhone 11</div>
                                <div style={{ fontSize: '14px', fontWeight: '500', color: 'grey'}}>Wow Certified</div>
                                <div style={{ fontSize: '18px', fontWeight: '600', color: 'black', marginTop: '10px'}}>AED 8349<span style={{ fontWeight: '400', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{ width: "25%" }} onClick={()=>handleProduct('/product_id')}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '20px',objectFit:'contain'}} /></div>
                                <div style={{ color: 'black', fontWeight: '500', marginTop: '20px', fontSize: '16px'}}>Apple iPhone 11</div>
                                <div style={{ fontSize: '14px', fontWeight: '500', color: 'grey'}}>Wow Certified</div>
                                <div style={{ fontSize: '18px', fontWeight: '600', color: 'black', marginTop: '10px'}}>AED 8349<span style={{ fontWeight: '400', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }} onClick={()=>handleProduct('/product_id')}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '20px',objectFit:'contain'}} /></div>
                                <div style={{ color: 'black', fontWeight: '500', marginTop: '20px', fontSize: '16px'}}>Apple iPhone 11</div>
                                <div style={{ fontSize: '14px', fontWeight: '500', color: 'grey'}}>Wow Certified</div>
                                <div style={{ fontSize: '18px', fontWeight: '600', color: 'black', marginTop: '10px'}}>AED 8349<span style={{ fontWeight: '400', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }} onClick={()=>handleProduct('/product_id')}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '20px',objectFit:'contain'}} /></div>
                                <div style={{ color: 'black', fontWeight: '500', marginTop: '20px', fontSize: '16px'}}>Apple iPhone 11</div>
                                <div style={{ fontSize: '14px', fontWeight: '500', color: 'grey'}}>Wow Certified</div>
                                <div style={{ fontSize: '18px', fontWeight: '600', color: 'black', marginTop: '10px'}}>AED 8349<span style={{ fontWeight: '400', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }} onClick={()=>handleProduct('/product_id')}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '20px',objectFit:'contain'}} /></div>
                                <div style={{ color: 'black', fontWeight: '500', marginTop: '20px', fontSize: '16px'}}>Apple iPhone 11</div>
                                <div style={{ fontSize: '14px', fontWeight: '500', color: 'grey'}}>Wow Certified</div>
                                <div style={{ fontSize: '18px', fontWeight: '600', color: 'black', marginTop: '10px'}}>AED 8349<span style={{ fontWeight: '400', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }} onClick={()=>handleProduct('/product_id')}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '20px',objectFit:'contain'}} /></div>
                                <div style={{ color: 'black', fontWeight: '500', marginTop: '20px', fontSize: '16px'}}>Apple iPhone 11</div>
                                <div style={{ fontSize: '14px', fontWeight: '500', color: 'grey'}}>Wow Certified</div>
                                <div style={{ fontSize: '18px', fontWeight: '600', color: 'black', marginTop: '10px'}}>AED 8349<span style={{ fontWeight: '400', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }} onClick={()=>handleProduct('/product_id')}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '20px',objectFit:'contain'}} /></div>
                                <div style={{ color: 'black', fontWeight: '500', marginTop: '20px', fontSize: '16px'}}>Apple iPhone 11</div>
                                <div style={{ fontSize: '14px', fontWeight: '500', color: 'grey'}}>Wow Certified</div>
                                <div style={{ fontSize: '18px', fontWeight: '600', color: 'black', marginTop: '10px'}}>AED 8349<span style={{ fontWeight: '400', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }} onClick={()=>handleProduct('/product_id')}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '20px',objectFit:'contain'}} /></div>
                                <div style={{ color: 'black', fontWeight: '500', marginTop: '20px', fontSize: '16px'}}>Apple iPhone 11</div>
                                <div style={{ fontSize: '14px', fontWeight: '500', color: 'grey'}}>Wow Certified</div>
                                <div style={{ fontSize: '18px', fontWeight: '600', color: 'black', marginTop: '10px'}}>AED 8349<span style={{ fontWeight: '400', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }} onClick={()=>handleProduct('/product_id')}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '20px',objectFit:'contain'}} /></div>
                                <div style={{ color: 'black', fontWeight: '500', marginTop: '20px', fontSize: '16px'}}>Apple iPhone 11</div>
                                <div style={{ fontSize: '14px', fontWeight: '500', color: 'grey'}}>Wow Certified</div>
                                <div style={{ fontSize: '18px', fontWeight: '600', color: 'black', marginTop: '10px'}}>AED 8349<span style={{ fontWeight: '400', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }} onClick={()=>handleProduct('/product_id')}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '20px',objectFit:'contain'}} /></div>
                                <div style={{ color: 'black', fontWeight: '500', marginTop: '20px', fontSize: '16px'}}>Apple iPhone 11</div>
                                <div style={{ fontSize: '14px', fontWeight: '500', color: 'grey'}}>Wow Certified</div>
                                <div style={{ fontSize: '18px', fontWeight: '600', color: 'black', marginTop: '10px'}}>AED 8349<span style={{ fontWeight: '400', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }} onClick={()=>handleProduct('/product_id')}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '20px',objectFit:'contain'}} /></div>
                                <div style={{ color: 'black', fontWeight: '500', marginTop: '20px', fontSize: '16px'}}>Apple iPhone 11</div>
                                <div style={{ fontSize: '14px', fontWeight: '500', color: 'grey'}}>Wow Certified</div>
                                <div style={{ fontSize: '18px', fontWeight: '600', color: 'black', marginTop: '10px'}}>AED 8349<span style={{ fontWeight: '400', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }} onClick={()=>handleProduct('/product_id')}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'green', color: 'white', padding: '2px', fontSize: '12px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '20px',objectFit:'contain'}} /></div>
                                <div style={{ color: 'black', fontWeight: '500', marginTop: '20px', fontSize: '16px'}}>Apple iPhone 11</div>
                                <div style={{ fontSize: '14px', fontWeight: '500', color: 'grey'}}>Wow Certified</div>
                                <div style={{ fontSize: '18px', fontWeight: '600', color: 'black', marginTop: '10px'}}>AED 8349<span style={{ fontWeight: '400', fontSize: '14px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pagination'>
                    <div style={{ width: '25%', padding: '10px' }}>
                        <div style={{ margin: 'auto', fontSize: '14px', fontWeight: '600' }}>
                            Page 1 of 6,133
                                  </div>
                    </div>
                    <div style={{ padding: '10px', display: 'flex' }}>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', backgroundColor: 'green', color: 'white', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            1
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'black', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            2
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'black', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            3
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'black', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            4
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'black', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            5
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'black', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            6
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'black', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            7
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'black', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            8
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'black', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            9
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'black', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            10
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'green', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            NEXT
                                  </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
