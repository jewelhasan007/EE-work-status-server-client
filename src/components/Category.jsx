import React from 'react';
import { FcElectricity } from "react-icons/fc";
import { TfiPanel } from "react-icons/tfi";

const Category = ({category}) => {
  const {section, image} = category
  console.log(image)
console.log(category)
    return (
        <div className='m-3 '>
            <div className="card bg-base-100 w-66 max-h-[250px] shadow-xl">
  <figure className='w-auto h-auto'>
        <img src={image} alt="" />
  </figure>
  <div className="card-body">
    <h2 className="text-1xl">{section}</h2>
    <p></p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Category;