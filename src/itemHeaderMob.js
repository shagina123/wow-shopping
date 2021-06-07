import React from 'react'
import { useHistory } from 'react-router-dom';
export default function ItemheaderMob() {
    const history = useHistory();
    const handleCategory = () => {
        history.push('/category');
    }

    const handleSearch = () => {
        history.push('/search');
    }

    return (
        <div>
            <section className='itemHeaderMob'>
                <div>
                    <div style={{ width: '100px',height:'100%',fontSize:'14px',display:'flex',justifyContent:'center'}}>
                        <div style={{alignSelf:'center'}}>Mac</div>
                    </div>
                </div>
                <div>
                    <div style={{ width: '100px',height:'100%',fontSize:'14px',display:'flex',justifyContent:'center'}}>
                        <div style={{alignSelf:'center'}}>iPhone</div>
                    </div>
                </div>
                <div>
                    <div style={{ width: '100px',height:'100%',fontSize:'14px',display:'flex',justifyContent:'center'}}>
                        <div style={{alignSelf:'center'}}>Mobile Phones</div>
                    </div>
                </div>
                <div>
                    <div style={{ width: '100px',height:'100%',fontSize:'14px',display:'flex',justifyContent:'center'}}>
                        <div style={{alignSelf:'center'}}>iPad</div>
                    </div>
                </div>

                <div>
                    <div style={{ width: '100px',height:'100%',fontSize:'14px',display:'flex',justifyContent:'center'}}>
                        <div style={{alignSelf:'center'}}>Laptops</div>
                    </div>
                </div>

                <div>
                    <div style={{ width: '100px',height:'100%',fontSize:'14px',display:'flex',justifyContent:'center'}}>
                        <div style={{alignSelf:'center'}}>Smartwatchs</div>
                    </div>
                </div>

                
                <div>
                    <div style={{ width: '100px',height:'100%',fontSize:'14px',display:'flex',justifyContent:'center'}}>
                        <div style={{alignSelf:'center'}}>Camera</div>
                    </div>
                </div>
            </section>
        </div>

    )
}
