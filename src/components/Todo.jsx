import React from 'react';
import { MdOutlineBookmarkAdd } from "react-icons/md";
import AddTask from './AddTask';
import { useLoaderData } from 'react-router-dom';
import TodoTable from './TodoTable';
import Header from './Header';

const Todo = () => {
  const task = useLoaderData()
  console.log(task)
 
  return (
    <div >
      <div className='flex justify-around'>
        <h1 className='text-2xl m-4 p-4 flex'>Todo lists for today: <Header></Header></h1> 
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

        <table className="table table-zebra">
          <thead>
            <tr >
              <th className='font-bold'>Sl. No.</th>
              <th className='font-bold'>Task Name</th>
              <th className='font-bold'>Area/ Section</th>
              <th className='font-bold'>Date</th>
              <th className='font-bold'>Status</th>
              <th className='font-bold'>Remaks</th>
            </tr>
          </thead>

          {
            task.map(tdata => <TodoTable key={task._id} tdata={tdata}></TodoTable>)
          }


        </table>
      </div>
    </div>
  );
};

export default Todo;