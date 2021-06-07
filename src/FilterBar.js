import React, { useState } from 'react'
import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
function valuetext(value) {
    return `${value}°C`;
}
const muiTheme = createMuiTheme({
    overrides: {
        MuiSlider: {
            thumb: {
                color: "white",
                border: '1px solid #d50000',
                width:'20px',
                height: '20px',
                 
            },
            track: {
                color: '#d50000',
                position: 'relative',
                top: '8px'
            },
            rail: {
                color: 'black',
                position: 'relative',
                top: '10px'

            }
        }
    }
});

export default function FilterBar() {
    const [value, setValue] = useState([0, 100]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <div className='filterContent'>
            {/* <div className='filterCont'>
                <div style={{ fontSize: '16px', fontWeight: '600', padding: '10px', paddingTop: '15px' }}>More Filters</div>
                <hr style={{ borderRight: '0', borderLeft: '0', borderTop: '1px solid #e0e0e0' }} />
                <div style={{ fontSize: '14px', padding: '10px'}}>
                    <div style={{fontWeight:'600'}}>CATEGORIES</div>
                    <div className="form-check" style={{ padding: '8px', paddingLeft: '0px', marginTop: '10px' }}>
                        <input className="form-check-input" style={{ margin: '0px' }} type="checkbox" value="" />
                        <label className="form-check-label" style={{ marginLeft: '10px'}}>
                            Mobile & Accessories
                                    </label>
                    </div>
                    <div className="form-check" style={{ padding: '8px', paddingLeft: '0px' }}>
                        <input className="form-check-input" style={{ margin: '0px' }} type="checkbox" value="" />
                        <label className="form-check-label" style={{ marginLeft: '10px' }}>
                            Mobiles
                                    </label>
                    </div>
                    <div className="form-check" style={{ padding: '8px', paddingLeft: '0px' }}>
                        <input className="form-check-input" style={{ margin: '0px' }} type="checkbox" value="" />
                        <label className="form-check-label" style={{ marginLeft: '10px' }}>
                            Mobile Accessories
                                    </label>
                    </div>
                    <div className="form-check" style={{ padding: '8px', paddingLeft: '0px' }}>
                        <input className="form-check-input" style={{ margin: '0px' }} type="checkbox" value="" />
                        <label className="form-check-label" style={{ marginLeft: '10px' }}>
                            Tablet Accessories
                                    </label>
                    </div>
                </div>
                <hr style={{ borderRight: '0', borderLeft: '0', borderTop: '1px solid #e0e0e0' }} />
          
                <hr style={{ borderRight: '0', borderLeft: '0', borderTop: '1px solid #e0e0e0' }} />
                <div style={{ fontSize: '14px', padding: '10px'}}>
                    <div style={{fontWeight:'600'}}>DISCOUNTS</div>
                    <div className="form-check" style={{ padding: '8px', paddingLeft: '0px', marginTop: '10px' }}>
                        <input className="form-check-input" style={{ margin: '0px' }} type="checkbox" />
                        <label className="form-check-label" style={{ marginLeft: '10px' }}>
                            50% or more
                                    </label>
                    </div>
                    <div className="form-check" style={{ padding: '8px', paddingLeft: '0px' }}>
                        <input className="form-check-input" style={{ margin: '0px' }} type="checkbox" />
                        <label className="form-check-label" style={{ marginLeft: '10px' }}>
                            40% or more
                                    </label>
                    </div>
                    <div className="form-check" style={{ padding: '8px', paddingLeft: '0px' }}>
                        <input className="form-check-input" style={{ margin: '0px' }} type="checkbox" />
                        <label className="form-check-label" style={{ marginLeft: '10px' }}>
                            30% or more
                                    </label>
                    </div>
                    <div className="form-check" style={{ padding: '8px', paddingLeft: '0px' }}>
                        <input className="form-check-input" style={{ margin: '0px' }} type="checkbox" />
                        <label className="form-check-label" style={{ marginLeft: '10px' }}>
                            20% or more
                                    </label>
                    </div>
                    <div className="form-check" style={{ padding: '8px', paddingLeft: '0px' }}>
                        <input className="form-check-input" style={{ margin: '0px' }} type="checkbox" />
                        <label className="form-check-label" style={{ marginLeft: '10px' }}>
                            10% or more
                                    </label>
                    </div>
                    <div className="form-check" style={{ padding: '8px', paddingLeft: '0px' }}>
                        <input className="form-check-input" style={{ margin: '0px' }} type="checkbox" />
                        <label className="form-check-label" style={{ marginLeft: '10px' }}>
                            10% and below
                                    </label>
                    </div>
                </div>
                <hr style={{ borderRight: '0', borderLeft: '0', borderTop: '1px solid #e0e0e0' }} />
                <div style={{ fontSize: '14px', padding: '10px'}}>
                    <div style={{ fontWeight: '600' }}>COLOR</div>
                    <div className="form-check" style={{ display: 'inline-flex', width: '100%', padding: '6px', paddingLeft: '0px', marginTop: '10px' }}>
                        <input className="form-check-input" style={{ margin: '0px' }} type="checkbox" />
                        <label className="form-check-label" style={{ marginLeft: '10px' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ height: '15px', width: '15px', backgroundColor: 'black', borderRadius: '50%' }}></div>
                                <div style={{ marginLeft: '8px' }}>Black(7485)</div>
                            </div>
                        </label>
                    </div>

                    <div className="form-check" style={{ display: 'inline-flex', width: '100%', padding: '6px', paddingLeft: '0px', marginTop: '10px' }}>
                        <input className="form-check-input" style={{ margin: '0px' }} type="checkbox" />
                        <label className="form-check-label" style={{ marginLeft: '10px' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ height: '15px', width: '15px', backgroundColor: 'green', borderRadius: '50%' }}></div>
                                <div style={{ marginLeft: '8px' }}>Green(6212)</div>
                            </div>
                        </label>
                    </div>

                    <div className="form-check" style={{ display: 'inline-flex', width: '100%', padding: '6px', paddingLeft: '0px', marginTop: '10px' }}>
                        <input className="form-check-input" style={{ margin: '0px' }} type="checkbox" />
                        <label className="form-check-label" style={{ marginLeft: '10px' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ height: '15px', width: '15px', backgroundColor: 'blue', borderRadius: '50%' }}></div>
                                <div style={{ marginLeft: '8px' }}>Blue(7485)</div>
                            </div>
                        </label>
                    </div>

                    <div className="form-check" style={{ display: 'inline-flex', width: '100%', padding: '6px', paddingLeft: '0px', marginTop: '10px' }}>
                        <input className="form-check-input" style={{ margin: '0px' }} type="checkbox" />
                        <label className="form-check-label" style={{ marginLeft: '10px' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ height: '15px', width: '15px', backgroundColor: 'black', borderRadius: '50%' }}></div>
                                <div style={{ marginLeft: '8px' }}>black</div>
                            </div>
                        </label>
                    </div>

                    <div className="form-check" style={{ display: 'inline-flex', width: '100%', padding: '6px', paddingLeft: '0px', marginTop: '10px', paddingBottom: '20px' }}>
                        <input className="form-check-input" style={{ margin: '0px' }} type="checkbox" />
                        <label className="form-check-label" style={{ marginLeft: '10px' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ height: '15px', width: '15px', backgroundColor: 'pink', borderRadius: '50%' }}></div>
                                <div style={{ marginLeft: '8px' }}>Pink(12585)</div>
                            </div>
                        </label>
                    </div>
                </div> */}
            {/* </div> */}

        </div>

    )
}
