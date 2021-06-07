import React from 'react'
import './home.css';
import Nav from './navbar';
import NavMob from './NavMobile';
import Footer from './footer';
import Itemheader from './itemHeader';
import Productbody from './productBody';
import SearchContentMob from './searchContentMob';
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router-dom';
import image1 from './img-4.jpeg';
import ReviewCard from './reviewcard.js';
import preview from './preview.jpeg';
import cable from './cable.png';
import phone2 from './phone2.jpg';
import ProductList2 from './productList2Mob';
import review from './review.svg';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import quotes from './quotes.png';
import quotes2 from './quotes2.png';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Home() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1124px)'
    })

    const history = useHistory();

    const handlebuynow = () => {
        history.push('/cart');
    }
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' }
    )

    const isSmallMobilemin = useMediaQuery({ query: '(min-width: 1px)' })
    const isSmallMobilemax = useMediaQuery({ query: '(max-width: 319.5px)' })



    const isMobilemin = useMediaQuery({ query: '(min-width: 320px)' })
    const isMobilemax = useMediaQuery({ query: '(max-width: 767.5px)' })

    const isTabmin = useMediaQuery({ query: '(min-width: 768px)' })
    const isTabmax = useMediaQuery({ query: '(max-width: 1123.5px)' })

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })


    return (
        <div>
            { isDesktopOrLaptop &&
                <div>
                    <Nav />
                    {/* <Itemheader /> */}

                    <div>
                        <Productbody />
                        <ReviewCard />

                        <div style={{ marginTop: '0px', width: "100%" }}>
                            <div style={{ width: '100%', height: '100%' }}>
                                <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
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



                    </div>

                    <Footer />

                </div>
            }

            { isTabmin && isTabmax &&

                <div style={{ width: '1180px' }}>
                    <Nav />
                    {/* <Itemheader /> */}

                    <div>
                        <Productbody />
                        <ReviewCard />

                        <div style={{ marginTop: '0px', width: "100%" }}>
                            <div style={{ width: '100%', height: '100%' }}>
                                <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
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



                    </div>

                    <Footer />

                </div>

            }

            {isBigScreen && <p>You  have a huge screen</p>}
            {isMobilemax && isMobilemin &&
                <div>
                    <NavMob />
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <div style={{ padding: '60px', paddingTop: '80', backgroundColor: 'white', height: '320px' }}>

                            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

                                <div class="carousel-inner" style={{ height: '100%', width: '100%' }}>
                                    <div class="carousel-item active" style={{ textAlign: 'center', height: '100%' }}>
                                        <img src={image1} style={{ height: '200px', objectFit: 'contain' }} />
                                    </div>

                                    <div class="carousel-item " style={{ textAlign: 'center', height: '100%' }}>
                                        <img src={image1} style={{ height: '200px', objectFit: 'contain' }} />
                                    </div>

                                    <div class="carousel-item " style={{ textAlign: 'center', height: '100%' }}>
                                        <img src={image1} style={{ height: '200px', objectFit: 'contain' }} />
                                    </div>


                                </div>
                                <div class="carousel-indicators" style={{ position: 'relative', top: '10px' }}>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style={{ backgroundColor: '#5A5A5A', width: '8px', height: '8px', borderRadius: '50%' }}></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" style={{ backgroundColor: '#5A5A5A', width: '8px', height: '8px', borderRadius: '50%' }}></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" style={{ backgroundColor: '#5A5A5A', width: '8px', height: '8px', borderRadius: '50%' }}></button>
                                </div>
                            </div>

                        </div>

                        <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'green', color: 'white', padding: '2px', fontSize: '12px', borderRadius: '4px' }}>20% OFF</div>

                    </div>

                    <div style={{ height: '1px', backgroundColor: '#e0e0e0' }}></div>
                    <div style={{ width: '100%', backgroundColor: 'white' }}>

                        <div style={{ width: '100%', fontSize: '20px', padding: '25px', paddingTop: '20px', paddingBottom: '5px', fontWeight: '600' }}>
                            Apple iPhone 11, 64 GB

                        </div>
                        <div style={{ fontWeight: '500', fontSize: '12px', color: 'grey', padding: '25px', paddingTop: '0px', paddingBottom: '5px', }}>Minimally used. Negligible Scratches. Fully Functional</div>
                        <div style={{ width: '100%', padding: '25px', paddingTop: '5px', fontWeight: '600' }}>
                            <div style={{ fontWeight: '700', fontSize: '20px' }}>AED 8349&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: '500', fontSize: '14px', textDecoration: 'line-through' }}>AED 9000</span></div>
                        </div>
                    </div>

                    <div style={{ width: '100%', padding: '25px', paddingTop: '0px', backgroundColor: 'white' }}>
                        <div style={{ fontWeight: '700', color: 'black', fontSize: '20px', width: '100%' }}>In The Box</div>
                        <div style={{ display: 'flex', width: '100%', marginTop: '10px' }}>
                            <div style={{ width: '33.3%', padding: '5px', paddingLeft: '0px' }}>
                                <div style={{ border: '1px solid #e0e0e0', padding: '10px' }}>
                                    <div><div style={{ fontSize: '12px', color: 'black', textAlign: 'center' }}>
                                        <img src={cable} />
                                        <div style={{ marginTop: '10px', fontSize: '12px', color: 'black', textAlign: 'center' }}>Charging Cable</div>
                                    </div></div>
                                </div>
                            </div>
                            <div style={{ width: '33.3%', padding: '5px', paddingLeft: '0px' }}>
                                <div style={{ border: '1px solid #e0e0e0', padding: '10px' }}>
                                    <div><div style={{ fontSize: '12px', color: 'black', textAlign: 'center' }}>
                                        <img src={cable} />
                                        <div style={{ marginTop: '10px', fontSize: '12px', color: 'black', textAlign: 'center' }}>Charging Cable</div>
                                    </div></div>
                                </div>
                            </div>
                            <div style={{ width: '33.3%', padding: '5px', paddingLeft: '0px' }}>
                                <div style={{ border: '1px solid #e0e0e0', padding: '10px' }}>
                                    <div><div style={{ fontSize: '12px', color: 'black', textAlign: 'center' }}>
                                        <img src={cable} />
                                        <div style={{ marginTop: '10px', fontSize: '12px', color: 'black', textAlign: 'center' }}>Charging Cable</div>
                                    </div></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div style={{ width: '100%', padding: '25px', paddingTop: '0px', fontWeight: '600', display: 'flex', backgroundColor: 'white' }}>
                        <div style={{ width: '50%' }}>
                            <div style={{ padding: '4px', paddingLeft: '0px' }}>
                                <input type='submit' value='BUY NOW' className='buyBtn' onClick={handlebuynow}></input>
                            </div>
                        </div>
                        <div style={{ width: '50%' }}>
                            <div style={{ padding: '4px', paddingLeft: '0px' }}>
                                <input type='submit' value='ADD TO CART' className='cartBtn' onClick={handleClick}></input>
                                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity="success">
                                        Added to Cart
                                    </Alert>
                                </Snackbar>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', padding: '25px', paddingTop: '0px', backgroundColor: 'white' }}>
                        <div style={{ fontWeight: '700', color: 'black', fontSize: '20px', width: '100%' }}>Specifications</div>
                        <div style={{ width: '100%' }}>
                            <div style={{ width: '100%', display: 'flex', paddingTop: '10px' }}>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    in The Box
                                       </div>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    Handset, Earpods
                                       </div>
                            </div>
                            <div style={{ width: '100%', display: 'flex', paddingTop: '10px' }}>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    Color
                                       </div>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    Purple
                                       </div>
                            </div>
                            <div style={{ width: '100%', display: 'flex', paddingTop: '10px' }}>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    Model Name
                                       </div>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    iPhone 11
                                       </div>
                            </div>
                            <div style={{ width: '100%', display: 'flex', paddingTop: '10px' }}>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    Color
                                       </div>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    White
                                       </div>
                            </div>
                            <div style={{ width: '100%', display: 'flex', paddingTop: '10px' }}>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    Browse Type
                                       </div>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    Smartphones
                                       </div>
                            </div>
                            <div style={{ width: '100%', display: 'flex', paddingTop: '10px' }}>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    Sim Type
                                       </div>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    Dual Sim
                                       </div>
                            </div>
                        </div>
                    </div>


                    {/* <div style={{ height: '100%', width: '100%', marginTop: '10px', backgroundColor: 'white' }}>
                        <img src={review} style={{ width: '100%', objectFit: 'contain' }} />

                        <div style={{ width: '100%' }}>

                            <div style={{padding:'10px',position:'relative'}}>
                                <img src={quotes} style={{width:'30px',height:'30px'}} />
                                <div style={{ fontSize: '14px', color: '#212121',marginTop:'0px',lineHeight:'30px',textAlign:'justify',padding:'8px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</div>
                                <img src={quotes2} style={{width:'30px',height:'30px',position:'absolute',right:'10px',bottom:'-45px'}} />   
                            </div>

                            <div style={{ padding:'10px',paddingBottom:'0px',fontSize: '18px', fontWeight: '600', marginTop: '20px' }}>Kavin James</div>
                            <div style={{ padding:'10px',paddingTop:'0px',fontSize: '14px', fontWeight: '400' }}>Youtube influencer</div>


                        </div>

                    </div> */}
                    <ProductList2 />
                </div>


            }

            {isSmallMobilemax && isSmallMobilemin &&
                <div style={{ width: '320px' }}>
                    <NavMob />
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <div style={{ padding: '60px', paddingTop: '80', backgroundColor: 'white', height: '320px' }}>

                            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

                                <div class="carousel-inner" style={{ height: '100%', width: '100%' }}>
                                    <div class="carousel-item active" style={{ textAlign: 'center', height: '100%' }}>
                                        <img src={image1} style={{ height: '200px', objectFit: 'contain' }} />
                                    </div>

                                    <div class="carousel-item " style={{ textAlign: 'center', height: '100%' }}>
                                        <img src={image1} style={{ height: '200px', objectFit: 'contain' }} />
                                    </div>

                                    <div class="carousel-item " style={{ textAlign: 'center', height: '100%' }}>
                                        <img src={image1} style={{ height: '200px', objectFit: 'contain' }} />
                                    </div>


                                </div>
                                <div class="carousel-indicators" style={{ position: 'relative', top: '10px' }}>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style={{ backgroundColor: '#5A5A5A', width: '8px', height: '8px', borderRadius: '50%' }}></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" style={{ backgroundColor: '#5A5A5A', width: '8px', height: '8px', borderRadius: '50%' }}></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" style={{ backgroundColor: '#5A5A5A', width: '8px', height: '8px', borderRadius: '50%' }}></button>
                                </div>
                            </div>

                        </div>

                        <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'green', color: 'white', padding: '2px', fontSize: '12px', borderRadius: '4px' }}>20% OFF</div>

                    </div>

                    <div style={{ height: '1px', backgroundColor: '#e0e0e0' }}></div>
                    <div style={{ width: '100%', backgroundColor: 'white' }}>

                        <div style={{ width: '100%', fontSize: '20px', padding: '25px', paddingTop: '20px', paddingBottom: '5px', fontWeight: '600' }}>
                            Apple iPhone 11, 64 GB

                    </div>
                        <div style={{ fontWeight: '500', fontSize: '12px', color: 'grey', padding: '25px', paddingTop: '0px', paddingBottom: '5px', }}>Minimally used. Negligible Scratches. Fully Functional</div>
                        <div style={{ width: '100%', padding: '25px', paddingTop: '5px', fontWeight: '600' }}>
                            <div style={{ fontWeight: '700', fontSize: '20px' }}>AED 8349&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: '500', fontSize: '14px', textDecoration: 'line-through' }}>AED 9000</span></div>
                        </div>
                    </div>

                    <div style={{ width: '100%', padding: '25px', paddingTop: '0px', backgroundColor: 'white' }}>
                        <div style={{ fontWeight: '700', color: 'black', fontSize: '20px', width: '100%' }}>In The Box</div>
                        <div style={{ display: 'flex', width: '100%', marginTop: '10px' }}>
                            <div style={{ width: '33.3%', padding: '5px', paddingLeft: '0px' }}>
                                <div style={{ border: '1px solid #e0e0e0', padding: '10px' }}>
                                    <div><div style={{ fontSize: '12px', color: 'black', textAlign: 'center' }}>
                                        <img src={cable} />
                                        <div style={{ marginTop: '10px', fontSize: '12px', color: 'black', textAlign: 'center' }}>Charging Cable</div>
                                    </div></div>
                                </div>
                            </div>
                            <div style={{ width: '33.3%', padding: '5px', paddingLeft: '0px' }}>
                                <div style={{ border: '1px solid #e0e0e0', padding: '10px' }}>
                                    <div><div style={{ fontSize: '12px', color: 'black', textAlign: 'center' }}>
                                        <img src={cable} />
                                        <div style={{ marginTop: '10px', fontSize: '12px', color: 'black', textAlign: 'center' }}>Charging Cable</div>
                                    </div></div>
                                </div>
                            </div>
                            <div style={{ width: '33.3%', padding: '5px', paddingLeft: '0px' }}>
                                <div style={{ border: '1px solid #e0e0e0', padding: '10px' }}>
                                    <div><div style={{ fontSize: '12px', color: 'black', textAlign: 'center' }}>
                                        <img src={cable} />
                                        <div style={{ marginTop: '10px', fontSize: '12px', color: 'black', textAlign: 'center' }}>Charging Cable</div>
                                    </div></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div style={{ width: '100%', padding: '25px', paddingTop: '0px', fontWeight: '600', display: 'flex', backgroundColor: 'white' }}>
                        <div style={{ width: '50%' }}>
                            <div style={{ padding: '4px', paddingLeft: '0px' }}>
                                <input type='submit' value='BUY NOW' className='buyBtn'></input>
                            </div>
                        </div>
                        <div style={{ width: '50%' }}>
                            <div style={{ padding: '4px', paddingLeft: '0px' }}>
                                <input type='submit' value='ADD TO CART' className='cartBtn'></input>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', padding: '25px', paddingTop: '0px', backgroundColor: 'white' }}>
                        <div style={{ fontWeight: '700', color: 'black', fontSize: '20px', width: '100%' }}>Specifications</div>
                        <div style={{ width: '100%' }}>
                            <div style={{ width: '100%', display: 'flex', paddingTop: '10px' }}>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    in The Box
                                   </div>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    Handset, Earpods
                                   </div>
                            </div>
                            <div style={{ width: '100%', display: 'flex', paddingTop: '10px' }}>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    Color
                                   </div>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    Purple
                                   </div>
                            </div>
                            <div style={{ width: '100%', display: 'flex', paddingTop: '10px' }}>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    Model Name
                                   </div>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    iPhone 11
                                   </div>
                            </div>
                            <div style={{ width: '100%', display: 'flex', paddingTop: '10px' }}>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    Color
                                   </div>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    White
                                   </div>
                            </div>
                            <div style={{ width: '100%', display: 'flex', paddingTop: '10px' }}>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    Browse Type
                                   </div>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    Smartphones
                                   </div>
                            </div>
                            <div style={{ width: '100%', display: 'flex', paddingTop: '10px' }}>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    Sim Type
                                   </div>
                                <div style={{ width: '50%', fontSize: '18px' }}>
                                    Dual Sim
                                   </div>
                            </div>
                        </div>
                    </div>


                    {/* <div style={{ height: '100%', width: '100%', marginTop: '10px', backgroundColor: 'white' }}>
                        <img src={phone2} style={{ width: '100%', objectFit: 'contain' }} />

                        <div style={{ backgroundColor: 'white', paddingBottom: '10px' }}>
                            <blockquote>
                                It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming;
                                    <footer>
                                    Teddy Roosevelt
                                    </footer>
                            </blockquote>
                        </div>

                    </div> */}
                    <ProductList2 />
                </div>
            }

            {/* <p>Your are in {  isPortrait ? 'portrait' : 'landscape'} orientation</p>
            { isRetina && <p>You are retina</p>} */}
        </div >
    )
}
