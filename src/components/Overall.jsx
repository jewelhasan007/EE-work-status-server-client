import React, { useEffect, useState } from 'react';
import Category from './Category';

const Overall = () => {
const [overAllData, setOverAllData] = useState([])

    useEffect(()=>{
        fetch('./overall-category.json')
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            setOverAllData(data)
        })
        .catch(error=>{
            console.log(error.message)
        })
    },[])

    return (
        <div>
        <h1>the overall page</h1>
       
       <div className='grid grid-cols-5 m-4 p-3'>
       {
            overAllData.map(category => <Category key={category.id} category={category}><button className="btn btn-sm">Small</button></Category>)
            
        }
       </div>
        </div>
    );
};

export default Overall;