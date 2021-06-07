import React from 'react'
import './home.css';
import Nav from './navbar';
import NavMob from './NavMobile';
import Footer from './footer';
import Filterbar from './FilterBar';
import SearchContent from './searchContent';
import SearchContentMob from './searchContentMob';
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router-dom';


export default function Home() {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1124px)'
    })

    const history = useHistory();
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' }
    )

    const isSmallMobilemin = useMediaQuery({ query: '(min-width: 1px)' })
    const isSmallMobilemax = useMediaQuery({ query: '(max-width: 319.5px)' })



    const isMobilemin = useMediaQuery({ query: '(min-width: 320px)' })
    const isMobilemax = useMediaQuery({ query: '(max-width: 767.5px)' })

    const isTabmin = useMediaQuery({ query: '(min-width: 768px)' })
    const isTabmax = useMediaQuery({ query: '(max-width: 1123.5px)' })

    // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    const handleFilter = () => {
        history.push('/filter')
    }

    return (
        <div>
            { isDesktopOrLaptop &&
                <div>
                    <Nav />
                    <div className='contentContainer'>
                        <Filterbar />
                        <SearchContent />

                    </div>

                    <Footer />

                </div>
            }

            { isBigScreen && <p>You  have a huge screen</p>}

            { isSmallMobilemin && isSmallMobilemax &&
                <div style={{ width: '320px' }}>
                    <NavMob />
                    <div style={{ backgroundColor: 'white', height: '60px', width: '100%', display: 'flex' }}>
                        <div style={{ width: '50%', textAlign: 'center', fontWeight: '600', display: 'inline-flex' }}>
                            <div style={{ margin: 'auto' }}>
                                <div><span style={{ position: 'relative', top: '4px' }} class="material-icons-round">swap_vert</span>Sort</div>
                            </div>
                        </div>
                        <div style={{ width: '50%', textAlign: 'center', fontWeight: '600', display: 'inline-flex' }} onClick={handleFilter}>
                            <div style={{ margin: 'auto' }}>
                                <div><span style={{ position: 'relative', top: '4px' }} class="material-icons-round">filter_alt</span>Filter</div>
                            </div>
                        </div>
                    </div>

                    <SearchContentMob />

                </div>


            }

            { isTabmin && isTabmax &&
                <div style={{ width: '1140px' }}>
                    <Nav />
                    {/* <Itemheader /> */}
                    <div className='contentContainer'>

                        <Filterbar />
                        <SearchContent />

                    </div>

                    <Footer />

                </div>


            }

            { isMobilemin && isMobilemax &&
                <div>
                    <NavMob search='searchcomponent' />
                    <div style={{ backgroundColor: 'white', height: '60px', width: '100%', display: 'flex' }}>
                        <div style={{ width: '50%', textAlign: 'center', fontWeight: '600', display: 'inline-flex' }}>
                            <div style={{ margin: 'auto' }}>
                                <div><span style={{ position: 'relative', top: '4px' }} class="material-icons-round">swap_vert</span><span style={{ fontSize: '14px' }}>Sort</span></div>
                            </div>
                        </div>
                        <div style={{ width: '50%', textAlign: 'center', fontWeight: '600', display: 'inline-flex' }} onClick={handleFilter}>
                            <div style={{ margin: 'auto' }}>
                                <div><span style={{ position: 'relative', top: '4px' }} class="material-icons-round">filter_alt</span><span style={{ fontSize: '14px' }}>Filter</span></div>
                            </div>
                        </div>
                    </div>
                  
                    <SearchContentMob />
                </div>
            }

        </div >
    )
}
