import React from 'react'
import drop from './drop.png';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useHistory } from 'react-router-dom';
import flag from './flag.svg';
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        outline: 'none'
    },
}));

export default function Navbar() {
    const history = useHistory();
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [bodyContent, setBody] = React.useState('');

    const handleOpen = () => {

        const body = (
            <div style={modalStyle} className={classes.paper}>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <div style={{ alignSelf: 'center', width: '100%' }}>
                        <h4 style={{ textAlign: 'center' }}>Welcome Back</h4>
                        <form>
                            <div class="form-group" style={{ width: '100%', marginTop: '20px' }}>
                                <input type="text" class="form-control" name="username" placeholder='Email' style={{ backgroundColor: '#EAEAEA' }} />
                            </div>

                            <div class="form-group" style={{ width: '100%', marginTop: '20px' }}>
                                <input type="password" class="form-control" name="password" placeholder='password' style={{ backgroundColor: '#EAEAEA' }} />
                            </div>
                        </form>

                        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }} onClick={handleOpen3}>Forgot Password</div>

                        <div style={{ width: '100%', marginTop: '20px' }}>
                            <button type="button" class="btn btn-danger" style={{ width: '100%', backgroundColor: '#d50000', outline: 'none' }}>LOGIN</button>
                        </div>


                        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>Don't have an account? <span style={{ color: '#d50000' }} onClick={handleOpen2}>Sign Up</span></div>
                    </div>
                </div>
            </div>
        );

        setBody(body)
        setOpen(true);

    };

    const handleOpen2 = () => {

        const body = (
            <div style={modalStyle} className={classes.paper}>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <div style={{ alignSelf: 'center', width: '100%' }}>
                        <h4 style={{ textAlign: 'center' }}>Sign Up</h4>
                        <form>
                            <div class="form-group" style={{ width: '100%', marginTop: '20px' }}>
                                <input type="text" class="form-control" name="username" placeholder='Full Name' style={{ backgroundColor: '#EAEAEA' }} />
                            </div>

                            <div class="form-group" style={{ width: '100%', marginTop: '20px' }}>
                                <input type="text" class="form-control" name="Email" placeholder='Email Address' style={{ backgroundColor: '#EAEAEA' }} />
                            </div>

                            <div class="form-group" style={{ width: '100%', marginTop: '20px' }}>
                                <input type="text" class="form-control" name="Phone" placeholder='Phone Number' style={{ backgroundColor: '#EAEAEA' }} />
                            </div>

                            <div class="form-group" style={{ width: '100%', marginTop: '20px' }}>
                                <input type="password" class="form-control" name="pass1" placeholder='Password' style={{ backgroundColor: '#EAEAEA' }} />
                            </div>

                            <div class="form-group" style={{ width: '100%', marginTop: '20px' }}>
                                <input type="password" class="form-control" name="pass2" placeholder='Confirm Password' style={{ backgroundColor: '#EAEAEA' }} />
                            </div>
                        </form>

                        <div style={{ width: '100%', marginTop: '20px' }}>
                            <button type="button" class="btn btn-danger" style={{ width: '100%', backgroundColor: '#d50000', outline: 'none' }}>CREATE ACCOUNT</button>
                        </div>


                        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>Already have an account? <span style={{ color: '#d50000' }} onClick={handleOpen}>Login</span></div>
                    </div>
                </div>
            </div>
        );

        setBody(body)
        setOpen(true);

    };


    const handleOpen3 = () => {

        const body = (
            <div style={modalStyle} className={classes.paper}>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <div style={{ alignSelf: 'center', width: '100%' }}>
                        <h4 style={{ textAlign: 'center' }}>Forgot Password?</h4>
                        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }} onClick={handleOpen3}>An email will be send to your registered email address</div>

                        <form>
                            <div class="form-group" style={{ width: '100%', marginTop: '20px' }}>
                                <input type="text" class="form-control" name="username" placeholder='Email' style={{ backgroundColor: '#EAEAEA' }} />
                            </div>
                        </form>


                        <div style={{ width: '100%', marginTop: '20px' }}>
                            <button type="button" class="btn btn-danger" style={{ width: '100%', backgroundColor: '#d50000', outline: 'none' }}>SEND EMAIL</button>
                        </div>



                    </div>
                </div>
            </div>
        );

        setBody(body)
        setOpen(true);

    };




    const handleClose = () => {
        setOpen(false);
    };

    const handleCart = () => {
        history.push('/cart')
    }

    const handleHome = () => {
        history.push('/home')
    }


    return (


        <div className='navTab'>

            <div style={{ width: '18%', height: '100%' }}>
                <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ alignSelf: 'center',display:'flex',width: '100%', height: '100%' }}>
                        <div style={{ width: '10%' }}></div>
                        <div style={{ width: '80%' }}>
                        <p style={{color:'white',fontWeight:'bold',fontSize:'18px',fontStyle:'italic'}}>WOW SHOPPING</p>
                        </div>
                        <div style={{ width: '10%' }}></div>
                    </div>
                    <div >

                    </div>
                </div>
            </div>

            <div className='search'>
                <div className='searchdiv'>
                    <input type='text' className='customizeSearch' placeholder='search' />
                    <div><span className="material-icons-round icon">search</span></div>
                </div>
            </div>

            <div className='headerLinks'>
                <div style={{ width: '14%' }}></div>
                <div className='headerLink'><div style={{ marginTop: '16px', fontSize: '16px', cursor: 'pointer' }} ><img src={flag} />&nbsp;UAE</div></div>
                <div style={{ width: '14%' }}></div>
                <div className='headerLink'><div style={{ marginTop: '16px', fontSize: '16px', cursor: 'pointer' }} onClick={() => handleOpen('login')}>Login</div></div>
                <div style={{ width: '14%' }}></div>
                <div className='headerLink'>
                    <div style={{ display: 'inline-flex', position: 'relative', marginTop: '16px', cursor: 'pointer' }} onClick={handleCart}>
                        <div style={{ position: 'absolute', top: '-2px', right: '0px', color: '#d50000', zIndex: '1', background: 'white', border: '1px solid #d50000', borderRadius: '50%', width: '14px', height: '14px', fontSize: '10px', fontWeight: '700', textAlign: 'center' }}>2</div>
                        <span className="material-icons-round" style={{ zIndex: '0', fontSize: '20px', top: '5px', marginRight: '6px', position: 'relative', top: '3px' }}>shopping_cart</span>
                    </div>
                    <div style={{ display: 'inline-flex', cursor: 'pointer', fontSize: '16px' }} onClick={handleCart}>Cart</div>

                </div>

            </div>

            <div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {bodyContent}
                </Modal>
            </div>
        </div>
    )
}
