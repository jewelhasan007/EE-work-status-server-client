import React from 'react';
import { MdOutlineBookmarkAdd } from "react-icons/md";
import AddTask from './AddTask';
import { useLoaderData } from 'react-router-dom';

const Todo = () => {
  const task = useLoaderData()
  console.log(task)
  const {id, area, action, date, details, remarks, status} = task
  const handleAddTask = () => {

  }
  return (
    <div >
      <div className='flex justify-around'>
        <h1 className='text-3xl m-4 p-4 '>Todo lists for today</h1>
        {/* Add Task */}
        <button className="btn btn-md m-4 p-4" onClick={() => document.getElementById('my_modal_4').showModal()}><MdOutlineBookmarkAdd />Add Task</button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box  w-11/12 max-w-4xl flex justify-between">

            <AddTask></AddTask>
            <div className=" flex modal-action ">
              <form method="dialog" className='flex'>
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>

      </div>

      {/* table */}
      <div className="overflow-x-auto m-5 p-4">
        <h1>Task List: {task.length}</h1>
        <table className="table table-zebra">
          <thead>
            <tr >
              <th className='font-bold'>Sl. No.</th>
              <th className='font-bold'>Area/ Section</th>
              <th className='font-bold'>Details of Task</th>
              <th className='font-bold'>Action</th>
              <th className='font-bold'>Status</th>
              <th className='font-bold'>Date</th>
              <th className='font-bold'>Remaks</th>
              <th className='font-bold'></th>
            </tr>
          </thead>
          `
          <tbody>
            <tr>
              <th>${id}</th>
              <td>${area}</td>
              <td>${date}</td>
              <td>${details}</td>
              <td>${status}</td>
              <td>${action}</td>
              <td>Blue</td>
            </tr>
            
          </tbody>
          `

          {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>company</th>
        <th>location</th>
        <th>Last Login</th>
        <th>Favorite Color</th>
      </tr>
    </tfoot> */}

        </table>
      </div>
    </div>
  );
};

export default Todo;