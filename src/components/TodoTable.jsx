import React from 'react';

const TodoTable = ({ tdata }) => {

    const handleDelete = _id => {
        console.log(_id)
        
        fetch(`http://localhost:3000/task/${_id}`, {
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            if(data.deletedCount>0){
                alert('TASK Deleted succesfully')
            }
        })
    }
    const {_id, serial, task, area, date, status, remarks } = tdata
    return (
        <tbody>
            <tr>
                <th>{serial}</th>
                <td>{task}</td>
                <td>{area}</td>
                <td>{date}</td>
                <td>{status}</td>
                <td>{remarks}</td>
                <td><button className="btn btn-sm" onClick={()=>handleDelete(_id)}>X</button></td>
            </tr>

        </tbody>
    );
};

export default TodoTable;