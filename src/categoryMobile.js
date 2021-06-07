import React from 'react'
import catImg from './catImg.png'
import add1 from './add1.png'
import samsung from './samsung.jpg'
import preview from './preview.jpeg'
import Product from './productList2Mob';
export default function CategoryMobile() {
    return (

        <div className="categoryContainer" style={{ height: "100%", width: "100%", backgroundColor: '#F1F3F6' }}>
            <div style={{ height: "100%", width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%' }}>
                        <img src={catImg} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', marginTop: '8px' }}>
                <div>
                    <div style={{ width: '100%', border: 'none', position: 'relative' }} >
                        <img src={add1} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                        <button style={{ position: 'absolute', top: '32%', left: '5%', height: '27px', width: '30%', backgroundColor: "#FFFFFF", fontSize: '16', fontWeight: 'bold', border: 'none', borderRadius: '5%', paddingTop: '6px' }}>AED 1123</button>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', marginTop: '8px' }}>
                <div>
                    <div style={{ width: '100%', border: 'none', position: 'relative' }} >
                        <img src={add1} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                        <button style={{ position: 'absolute', top: '32%', left: '5%', height: '27px', width: '30%', backgroundColor: "#FFFFFF", fontSize: '16', fontWeight: 'bold', border: 'none', borderRadius: '5%', paddingTop: '6px' }}>AED 1123</button>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', marginTop: '8px' }}>
                <div>
                    <div style={{ width: '100%', border: 'none', position: 'relative' }} >
                        <img src={add1} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                        <button style={{ position: 'absolute', top: '32%', left: '5%', height: '27px', width: '30%', backgroundColor: "#FFFFFF", fontSize: '16', fontWeight: 'bold', border: 'none', borderRadius: '5%', paddingTop: '6px' }}>AED 1123</button>
                    </div>
                </div>
            </div>


            <div style={{ width: '100%', marginTop: '8px' }}>
                <div>
                    <div style={{ display: 'flex', background: '#EAEAEA', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                        <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                            <img src={samsung} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                        </div>
                        <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                <div style={{ fontWeight: '600', fontSize: '20px' }}>Samsung S8</div>
                                <div style={{ fontSize: '20px', marginTop: '2px' }}>(64GB | 64GB)</div>
                                <div style={{ fontSize: '14px', marginTop: '2px' }}>6MP Quad Cam | 6.5'FHD+</div>
                                <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '80%' }}>Shop Now</button></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', marginTop: '8px' }}>
                <div>
                    <div style={{ display: 'flex', background: '#EAEAEA', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                        <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                            <img src={samsung} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                        </div>
                        <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                <div style={{ fontWeight: '600', fontSize: '20px' }}>Samsung S8</div>
                                <div style={{ fontSize: '20px', marginTop: '2px' }}>(64GB | 64GB)</div>
                                <div style={{ fontSize: '14px', marginTop: '2px' }}>6MP Quad Cam | 6.5'FHD+</div>
                                <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '80%' }}>Shop Now</button></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', marginTop: '8px' }}>
                <div>
                    <div style={{ display: 'flex', background: '#EAEAEA', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                        <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                            <img src={samsung} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                        </div>
                        <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                <div style={{ fontWeight: '600', fontSize: '20px' }}>Samsung S8</div>
                                <div style={{ fontSize: '20px', marginTop: '2px' }}>(64GB | 64GB)</div>
                                <div style={{ fontSize: '14px', marginTop: '2px' }}>6MP Quad Cam | 6.5'FHD+</div>
                                <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '80%' }}>Shop Now</button></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <Product />

          
            <div style={{ width: '100%', marginTop: '8px' }}>
                <div>
                    <div style={{ display: 'flex', background: '#EAEAEA', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                        <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                            <img src={samsung} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                        </div>
                        <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                <div style={{ fontWeight: '600', fontSize: '20px' }}>Samsung S8</div>
                                <div style={{ fontSize: '20px', marginTop: '2px' }}>(64GB | 64GB)</div>
                                <div style={{ fontSize: '14px', marginTop: '2px' }}>6MP Quad Cam | 6.5'FHD+</div>
                                <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '80%' }}>Shop Now</button></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', marginTop: '8px' }}>
                <div>
                    <div style={{ display: 'flex', background: '#EAEAEA', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                        <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                            <img src={samsung} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                        </div>
                        <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                <div style={{ fontWeight: '600', fontSize: '20px' }}>Samsung S8</div>
                                <div style={{ fontSize: '20px', marginTop: '2px' }}>(64GB | 64GB)</div>
                                <div style={{ fontSize: '14px', marginTop: '2px' }}>6MP Quad Cam | 6.5'FHD+</div>
                                <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '80%' }}>Shop Now</button></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Product />

                  </div>

    )
}