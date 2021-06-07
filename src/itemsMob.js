import React from 'react'
import macbooks from './macbook.png';
import {useHistory} from 'react-router-dom';
export default function ItemsMob() {
    const history = useHistory();
    

    const handleCategory = () => {
        history.push('/category')
    }
    return (
        <div>
            <section className='items'>
                <div>
                    <div style={{ textAlign: 'center', height: '109px', width: '110px' }}>
                        <div style={{ display: 'inline-block',height:'100%',padding:'15px',paddingBottom:'0px'}}>
                            <div style={{ width: '60px', height: '60px'}} >
                                <div onClick={handleCategory} style={{ width: '100%', height: '100%', backgroundColor: '#EFEFEF', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                    <img src={macbooks} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', fontSize: '13px', marginTop: '8px' }}>Macbooks</div>
                        </div>
                    </div>
                </div>
                <div style={{height:'109px'}}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ display: 'inline-block',height:'100%',padding:'15px',paddingBottom:'0px'}}>
                            <div style={{ width: '60px', height: '60px' }}>
                                <div onClick={handleCategory}  style={{ width: '100%', height: '100%', backgroundColor: '#EFEFEF', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                    <img src={macbooks} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', fontSize: '13px', marginTop: '8px' }}>iPhones</div>
                        </div>
                    </div>
                </div>
                <div style={{height:'109px'}}>
                    <div style={{ textAlign: 'center',width:'130px'}}>
                        <div style={{ display: 'inline-block',height:'100%',width:'100%',padding:'15px',paddingBottom:'0px'}}>
                            <div style={{ width: '60px', height: '60px',marginLeft:'20px'}}>
                                <div onClick={handleCategory}  style={{ width: '100%', height: '100%', backgroundColor: '#EFEFEF', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                    <img src={macbooks} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                </div>
                            </div>
                            <div style={{fontSize: '13px', marginTop: '8px' }}>Android Phones</div>
                        </div>
                    </div>
                </div>
                
                <div style={{height:'109px'}}>
                    <div style={{ textAlign: 'center',width:'130px'}}>
                        <div style={{ display: 'inline-block',height:'100%',width:'100%',padding:'15px',paddingBottom:'0px'}}>
                            <div style={{ width: '60px', height: '60px',marginLeft:'20px'}}>
                                <div onClick={handleCategory}  style={{ width: '100%', height: '100%', backgroundColor: '#EFEFEF', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                    <img src={macbooks} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                </div>
                            </div>
                            <div style={{fontSize: '13px', marginTop: '8px' }}>iPad & Tablets</div>
                        </div>
                    </div>
                </div>
                

                <div style={{height:'109px'}}>
                    <div style={{ textAlign: 'center', height: '109px', width: '110px' }}>
                        <div style={{ display: 'inline-block',height:'100%',padding:'15px',paddingBottom:'0px'}}>
                            <div style={{ width: '60px', height: '60px' }}>
                                <div onClick={handleCategory}  style={{ width: '100%', height: '100%', backgroundColor: '#EFEFEF', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                    <img src={macbooks} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', fontSize: '13px', marginTop: '8px' }}>Laptops</div>
                        </div>
                    </div>
                </div>

                <div style={{height:'109px'}}>
                    <div style={{ textAlign: 'center',width:'130px'}}>
                        <div style={{ display: 'inline-block',height:'100%',width:'100%',padding:'15px',paddingBottom:'0px'}}>
                            <div style={{ width: '60px', height: '60px',marginLeft:'20px'}}>
                                <div onClick={handleCategory}  style={{ width: '100%', height: '100%', backgroundColor: '#EFEFEF', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                    <img src={macbooks} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                </div>
                            </div>
                            <div style={{fontSize: '13px', marginTop: '8px' }}>Smartwatches</div>
                        </div>
                    </div>
                </div>
                
                <div style={{height:'109px'}}>
                    <div style={{ textAlign: 'center', height: '109px', width: '110px' }}>
                        <div style={{ display: 'inline-block',height:'100%',padding:'15px',paddingBottom:'0px'}}>
                            <div style={{ width: '60px', height: '60px' }}>
                                <div onClick={handleCategory}  style={{ width: '100%', height: '100%', backgroundColor: '#EFEFEF', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                                    <img src={macbooks} style={{ alignSelf: "center", objectFit: 'contain', height: '60%', width: '60%' }} />
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', fontSize: '13px', marginTop: '8px' }}>Camera</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
