import React from 'react';

const Category = ({category}) => {
  const {section} = category
console.log(category)
    return (
        <div>
            <div className="card bg-base-100 w-46 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{section}</h2>
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