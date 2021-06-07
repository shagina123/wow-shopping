import React from 'react'
import './home.css';
import Nav from './navbar';
import NavMob from './NavMobile';
import Footer from './footer';
import Itemheader from './itemHeader';
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router-dom';
import Category from './category';
import CategoryTab from './categoryTab';
import CategoryMob from './categoryMobile';
import FooterMob from './footerMob';
import CategorySmall from './categorySmall';

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
                    <Nav/>
                    <Category/>
                    <Footer/>
                </div>
            }

            { isBigScreen && <p>You  have a huge screen</p>}

            { isTabmin && isTabmax &&
                <div>
                    <Nav />
                    <CategoryTab />
                    <Footer />
                </div>
            }

            { isMobilemin && isMobilemax &&
                <div >
                    <NavMob />
                    <CategoryMob />
                    <FooterMob />
                </div>
            }

            { isSmallMobilemin && isSmallMobilemax &&
                <div >
                    <NavMob />
                    <CategorySmall />
                    <FooterMob />
                </div>
            }




            {/* <p>Your are in {  isPortrait ? 'portrait' : 'landscape'} orientation</p>
            { isRetina && <p>You are retina</p>} */}
        </div >
    )
}
