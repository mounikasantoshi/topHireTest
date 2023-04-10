import React, { useState } from 'react'

function Employee() {
    const [employee, setEmployee] = useState({ name: '', age: '', position: '' });
    const [employeeList, setEmployeeList] = useState([]);
    const [editEmp, setEditEmp] = useState(false);

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setEmployee({ ...employee, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if(editEmp){
       const editted= employeeList.filter((emp)=>emp.name!==employee.name)
      setEmployeeList([...editted,employee])

      // setEmployeeList(edittedList)
      }else{
      setEmployeeList([...employeeList,employee])
    }
    setEmployee({ name: '', age: '', position: '' });
    };

    const onEditEmployee=(employee)=>{
      setEditEmp(true)
      setEmployee(employee)
    }
    const onDeleteEmployee=(employee)=>{
       const list= employeeList.filter((emp)=>emp.name!==employee.name)
        setEmployeeList(list)
    }
  
    return (
        <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={employee.name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" name="age" value={employee.age} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="position">Position:</label>
          <input type="text" name="position" value={employee.position} onChange={handleInputChange} />
        </div>
        <button type="submit">Add Employee</button>
      </form>
      <table>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>Age</th>
          <th>Position</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employeeList.length!==0&&(employeeList.map((employee,i) => (
          <tr key={i}>
            <td>{i}</td>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td>{employee.position}</td>
            <td>
              <button onClick={() => onEditEmployee(employee)}>Edit</button>
              <button onClick={() =>onDeleteEmployee(employee)}>Delete</button>
            </td>
          </tr>
        )))}
      </tbody>
    </table>
      </div>
    );
  }

export default Employee