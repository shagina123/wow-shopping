import React from 'react'
import './home.css';
import Nav from './navbar';
import NavMob from './NavMobile';
import Footer from './footer';
import FooterMob from './footerMob';
import Itemheader from './itemHeader';
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router-dom';
import Cart from './cart';
import CartMob from './cartMobile';


export default function NewHome() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })

    const history = useHistory();
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' }
    )

    const isSmallMobilemin = useMediaQuery({ query: '(min-width: 240px)' })
    const isSmallMobilemax = useMediaQuery({ query: '(max-width: 319px)' })



    const isMobilemin = useMediaQuery({ query: '(min-width: 320px)' })
    const isMobilemax = useMediaQuery({ query: '(max-width: 767px)' })

    const isTabmin = useMediaQuery({ query: '(min-width: 768px)' })
    const isTabmax = useMediaQuery({ query: '(max-width: 1023px)' })

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <div>
            { isDesktopOrLaptop &&
                <div>
                    <Nav />
                    <Cart/>
                    <Footer />
                </div>
            }

            { isBigScreen && <p>You  have a huge screen</p>}

            { isTabmin && isTabmax &&
                <div>
                    <Nav />
                    <Cart/>
                    <Footer />
                </div>
            }

            { isMobilemin && isMobilemax &&
                <div >
                    <NavMob />
                    <CartMob/>
                    <FooterMob />
                </div>
            }

            { isSmallMobilemin && isSmallMobilemax &&
                <div >
                    <NavMob />
                    <CartMob/>
                    <FooterMob />
                </div>
            }




            {/* <p>Your are in {  isPortrait ? 'portrait' : 'landscape'} orientation</p>
            { isRetina && <p>You are retina</p>} */}
        </div >
    )
}
