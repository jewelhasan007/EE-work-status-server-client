import React from 'react';

const AddTask = () => {
    const handleTaskAdd = event => {
        event.preventDefault();
        const form = event.target;
        const section = form.section.value
        const details = form.details.value
        const action = form.action.value
        const status = form.status.value
        const date = form.date.value
        const remarks = form.remarks.value
        const taskData = {section, details, action, status, date, remarks}
        console.log(taskData)
        form.reset()

            fetch('http://localhost:3000/task',{
          method: 'POST',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(taskData)
        })

        .then(res=> res.json())
        .then(data => {
          console.log(data)
        })

    }
    return (
        <div>
     <div className="hero bg-base-200">
      <div className=" flex-col hero-content">
  <h2 className="text-2xl font-bold">Add New Task in here</h2>
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
             <form className="card-body" onSubmit={handleTaskAdd}>
          <input type="section" name='section' placeholder="Area/ Section" className="input input-bordered" required />
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