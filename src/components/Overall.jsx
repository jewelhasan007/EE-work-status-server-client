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
       
       <div className='grid grid-cols-6 m-4'>
       {
            overAllData.map(category => <Category key={category.id} category={category}></Category>)
        }
       </div>
        </div>
    );
};

export default Overall;