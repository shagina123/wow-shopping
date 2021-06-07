import React from 'react'
import { useHistory } from 'react-router-dom';
export default function Itemheader() {
    const history = useHistory();
    const handleCategory = () => {
          history.push('/category');  
    }

    const handleSearch = () => {
        history.push('/search');  
  }

    return (
        <div className='itemHeaderTab'>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '20%' }}></div>
                <div className='itemLinks' onClick={handleCategory}>Mac</div>
                <div className='itemLinks' onClick={handleSearch}>iPhone</div>
                <div className='itemLinks'>Mobile phones</div>
                <div className='itemLinks'>iPad</div>
                <div className='itemLinks'>Laptops</div>
                <div className='itemLinks'>Smartwatchs</div>
                <div className='itemLinks'>Camera</div>
                <div style={{ width: '20%' }}></div>
            </div>
        </div>
    )
}
