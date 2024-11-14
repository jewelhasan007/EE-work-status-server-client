import React from 'react';

const AddTask = () => {
    return (
        <div>
     <div className="hero bg-base-200">
      <div className=" flex-col hero-content">
  <h2 className="text-2xl font-bold">Add New Task in here</h2>
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
             <form className="card-body">
          <input type="area" name='area' placeholder="Area/ Section" className="input input-bordered" required />
          <input type="details" name='details' placeholder="Details of Task" className="input input-bordered" required />
          <input type="action" name='action' placeholder="Action" className="input input-bordered" required />
          <input type="status" name='status' placeholder="Status" className="input input-bordered" required />
          <input type="date" name='date' placeholder="Date" className="input input-bordered" required />
          <input type="remarks" name='remarks' placeholder="Remarks" className="input input-bordered" required />
        
          <div className="form-control mt-6">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddTask;