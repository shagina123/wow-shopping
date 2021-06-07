import React, { useState } from 'react';
import image1 from './img-1.jpeg';
import image2 from './img-2.jpeg';
import image3 from './img-4.jpeg';
import image4 from './img-3.jpeg';
import image5 from './img-5.jpeg';
import cert from './cert.svg';
import guaran from './guaran.png';
import cable from './cable.png';
import care from './care.png';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

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

export default function ProductBody() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const history = useHistory();
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const [images, setImage] = useState(image2)
    const handleImage = (value) => {
        setImage(value)
    }

    const handlebuynow = () => {
        history.push('/cart');
    }

    return (

        <div style={{ width: "100%", marginTop: '20px' }}>
            <div style={{ width: '100%', height: '100%' }}>
                <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                    <div style={{ background: 'white', height: '100%', display: 'flex' }}>
                        <div style={{ position: 'relative', width: '40%', height: '100%' }}>
                            <div style={{ padding: '20px' }}>
                                <div style={{ width: '100%', border: '1px solid #e0e0e0', textAlign: 'center', padding: '10px' }}><img src={images} style={{ objectFit: 'contain' }} /></div>
                            </div>
                            <div style={{ position: 'absolute', top: '30px', right: '30px', background: 'green', color: 'white', padding: '2px', fontSize: '12px' }}>20% OFF</div>
                            <div style={{ padding: '20px', paddingTop: '0px', width: '100%', height: '100%', display: 'flex' }}>
                                <div style={{ border: '1px solid #e0e0e0' }}><div onClick={() => handleImage(image3)}><img style={{ padding: '10px', width: '100%', height: '100%', objectFit: 'contain' }} src={image3} /></div></div>
                                <div style={{ border: '1px solid #e0e0e0' }}><div onClick={() => handleImage(image1)} ><img style={{ padding: '10px', width: '100%', height: '100%', objectFit: 'contain' }} src={image1} /></div></div>
                                <div style={{ border: '1px solid #e0e0e0' }}><div onClick={() => handleImage(image5)}><img style={{ padding: '10px', width: '100%', height: '100%', objectFit: 'contain' }} src={image5} /></div></div>
                                <div style={{ border: '1px solid #e0e0e0' }}><div onClick={() => handleImage(image4)}><img style={{ padding: '10px', width: '100%', height: '100%', objectFit: 'contain' }} src={image4} /></div></div>
                                <div style={{ border: '1px solid #e0e0e0' }}><div onClick={() => handleImage(image3)}><img style={{ padding: '10px', width: '100%', height: '100%', objectFit: 'contain' }} src={image3} /></div></div>
                            </div>
                        </div>

                        <div style={{ position: 'relative', width: '60%', height: '100%' }}>
                            <div style={{ width: '100%', display: 'flex' }}>

                                <div style={{ width: '70%' }}>
                                    <div style={{ width: '100%' }}>
                                        <div style={{ width: '100%', padding: '25px', paddingBottom: '0px' }}>
                                            <img src={cert} />
                                        </div>
                                        <div style={{ width: '100%', padding: '25px', paddingTop: '20px', fontWeight: '600' }}>
                                            Apple iPhone 11, 64 GB(Includes Earpods,Power Adapter)
                                         <br /> <span style={{ fontWeight: '500', fontSize: '12px' }}>Minimally used. Negligible Scratches. Fully Functional</span>
                                        </div>

                                        <div style={{ width: '100%', padding: '25px', paddingTop: '0px', fontWeight: '600' }}>
                                            <div style={{ fontWeight: '700' }}>AED 8349&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: '500', fontSize: '14px', textDecoration: 'line-through' }}>AED 9000</span></div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', padding: '25px', paddingTop: '0px', fontWeight: '600', display: 'flex' }}>
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
                                    
                                    <div style={{ width: '100%', padding: '25px', paddingTop: '0px' }}>
                                        <div style={{ fontWeight: '700', color: 'black', fontSize: '18px', width: '100%' }}>In The Box</div>
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
                                </div>
                               
                            </div>

                            <div style={{ width: '100%', padding: '25px', paddingTop: '0px' }}>
                                <div style={{ fontWeight: '700', color: 'black', fontSize: '18px', width: '100%' }}>Specifications</div>
                                <div style={{ width: '100%', border: '1px solid #e0e0e0' }}>
                                    <div style={{ width: '100%', display: 'flex', padding: '10px' }}>
                                        <div style={{ width: '20%', fontSize: '14px' }}>
                                            in The Box

                                           </div>
                                        <div style={{ width: '80%', fontSize: '14px' }}>
                                            Handset, Earpods with Lighting Connector, Lighting to USB Cable
                                           </div>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex', padding: '10px' }}>
                                        <div style={{ width: '20%', fontSize: '14px' }}>
                                            Model Number

                                           </div>
                                        <div style={{ width: '80%', fontSize: '14px' }}>
                                            MWLLHUYA/A
                                           </div>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex', padding: '10px' }}>
                                        <div style={{ width: '20%', fontSize: '14px' }}>
                                            Model Name

                                           </div>
                                        <div style={{ width: '80%', fontSize: '14px' }}>
                                            iPhone 11
                                           </div>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex', padding: '10px' }}>
                                        <div style={{ width: '20%', fontSize: '14px' }}>
                                            Color

                                           </div>
                                        <div style={{ width: '80%', fontSize: '14px' }}>
                                            White
                                           </div>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex', padding: '10px' }}>
                                        <div style={{ width: '20%', fontSize: '14px' }}>
                                            Browse Type

                                           </div>
                                        <div style={{ width: '80%', fontSize: '14px' }}>
                                            Smartphones
                                           </div>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex', padding: '10px' }}>
                                        <div style={{ width: '20%', fontSize: '14px' }}>
                                            Sim Type

                                           </div>
                                        <div style={{ width: '80%', fontSize: '14px' }}>
                                            Dual Sim
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
