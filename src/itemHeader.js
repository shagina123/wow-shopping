import React from 'react'
import { useHistory } from 'react-router-dom';
export default function Itemheader() {
    const history = useHistory();

    const handleSearch = (value) => {
        history.push('/search/'+value);
    }

    return (
        <div className='itemHeader'>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '20%' }}></div>
                <div className='itemLinks' onClick={()=>handleSearch('mac')}>Mac</div>
                <div className='itemLinks' onClick={()=>handleSearch('iphone')}>iPhone</div>
                <div className='itemLinks' onClick={()=>handleSearch('mobile phones')}>Mobile phones</div>
                <div className='itemLinks' onClick={()=>handleSearch('ipad')}>iPad</div>
                <div className='itemLinks' onClick={()=>handleSearch('laptops')}>Laptops</div>
                <div className='itemLinks' onClick={()=>handleSearch('smartwatches')}>Smartwatchs</div>
                <div className='itemLinks' onClick={()=>handleSearch('camera')}>Camera</div>
                <div style={{ width: '20%' }}></div>
            </div>
        </div>
    )
}
