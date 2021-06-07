import React, { useState } from 'react'
import drop from './drop.png';
import { useHistory, useParams } from 'react-router-dom';
export default function Navbar(props) {
    const history = useHistory();
    const handleCart = () => {
        history.push('/cart')
    }

    const handleHome = () => {
        history.push('/home')
    }

    const params = useParams();
    const { query } = params;

    const [query2, setQuery] = useState(query);
    const [searchflag, setFlag] = useState(true);
    console.log(props.search)
    const handleSearch = (e) => {
        setFlag(false)
        setQuery(e.target.value)
    }

    const handleQuery = (value) => {
        history.push('/search/' + value);
        setQuery(value);
        setFlag(true)
    }

    return (
        <div>
            <div className='navMobile' >
                <div style={{ display: 'flex', width: '100%', position: 'relative', paddingTop: '10px' }}>
                    <div className='logoMob'>
                    <p style={{color:'white',fontWeight:'bold',fontSize:'18px',fontStyle:'italic'}}>WOW SHOPPING</p>
                    </div>

                    <div className='headerLinkMob'>
                        <div style={{ display: 'inline-flex', position: 'relative', marginTop: '16px' }} onClick={handleCart}>
                            <div style={{ position: 'absolute', right: '0px', color: '#d50000', zIndex: '1', background: 'white', border: '1px solid #d50000', borderRadius: '50%', width: '15px', height: '15px', fontSize: '10px' }}>1</div>
                            <span className="material-icons-round" style={{ zIndex: '0', fontSize: '22px', top: '5px', marginRight: '6px', position: 'relative', top: '3px' }}>shopping_cart</span>
                        </div>
                        <div style={{ display: 'inline-flex', fontSize: '16px' }} onClick={handleCart}>Cart</div>

                    </div>
                </div>

                <div className='searchMob'>
                    <div className='searchdivMob'>
                        <input type='text' className='customizeSearchMob' placeholder='Search Products, Brands' onChange={handleSearch} value={query2} />
                        <div><span className="material-icons-round iconMob">search</span></div>
                    </div>

                    <div style={{ width: '100%', background: 'white', position: 'absolute', top: '120px', zIndex: '1000' }}>

                        {query2 !== undefined && query2 !== '' && !searchflag ? <div>
                            <div style={{ padding: '12px', listStyleType: 'none', borderBottom: '1px solid #e0e0e0', width: '100%' }} onClick={() => handleQuery(query2)}>auto complete value for {query2}</div>
                            <div style={{ padding: '12px', listStyleType: 'none', borderBottom: '1px solid #e0e0e0', width: '100%' }} onClick={() => handleQuery(query2)}>auto complete value for {query2}</div>
                            <div style={{ padding: '12px', listStyleType: 'none', borderBottom: '1px solid #e0e0e0', width: '100%' }} onClick={() => handleQuery(query2)}>auto complete value for {query2}</div>
                        </div> : console.log(query + 'null')}
                    </div>
                </div>
            </div>

            {props.search === 'searchcomponent' ? console.log('search') :
                <div style={{ marginBottom: '10px' }}>
                    <section className='itemHeaderMob'>
                        <div>
                            <div style={{ width: '100px', height: '100%', fontSize: '14px', display: 'flex', justifyContent: 'center' }} onClick={() => handleQuery('mac')}>
                                <div style={{ alignSelf: 'center' }}>Mac</div>
                            </div>
                        </div>
                        <div>
                            <div style={{ width: '100px', height: '100%', fontSize: '14px', display: 'flex', justifyContent: 'center' }} onClick={() => handleQuery('iphone')}>
                                <div style={{ alignSelf: 'center' }}>iPhone</div>
                            </div>
                        </div>
                        <div>
                            <div style={{ width: '100px', height: '100%', fontSize: '14px', display: 'flex', justifyContent: 'center' }} onClick={() => handleQuery('Mobile Phones')}>
                                <div style={{ alignSelf: 'center' }}>Mobile Phones</div>
                            </div>
                        </div>
                        <div>
                            <div style={{ width: '100px', height: '100%', fontSize: '14px', display: 'flex', justifyContent: 'center' }} onClick={() => handleQuery('iPad')}>
                                <div style={{ alignSelf: 'center' }}>iPad</div>
                            </div>
                        </div>

                        <div>
                            <div style={{ width: '100px', height: '100%', fontSize: '14px', display: 'flex', justifyContent: 'center' }} onClick={() => handleQuery('Laptops')}>
                                <div style={{ alignSelf: 'center' }}>Laptops</div>
                            </div>
                        </div>

                        <div>
                            <div style={{ width: '100px', height: '100%', fontSize: '14px', display: 'flex', justifyContent: 'center' }} onClick={() => handleQuery('SmartWatches')}>
                                <div style={{ alignSelf: 'center' }}>Smartwatches</div>
                            </div>
                        </div>


                        <div>
                            <div style={{ width: '100px', height: '100%', fontSize: '14px', display: 'flex', justifyContent: 'center' }} onClick={() => handleQuery('Camera')}>
                                <div style={{ alignSelf: 'center' }}>Camera</div>
                            </div>
                        </div>
                    </section>
                </div>
            }
        </div>
    )
}
