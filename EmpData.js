import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {AiFillDelete} from 'react-icons/ai'


const EmpData = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [open, setOpen] =useState(false);

  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/Employee');
      setData(response.data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/Employee/${id}`)
      .then(() => {
        console.log('User deleted successfully.');
        fetchData(); // Refresh the user list after deletion
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/Employee', {name,job})
      .then(response => {
        console.log('User created successfully.');
        setName('');
        setJob('');
        
      })
      .catch(error => {
        console.error('Error creating user:', error);
      });
  };



  return (
    <div>
      <h1>Employee List</h1>
      <button onClick={()=>setOpen(true)}>Add employee</button>
      {open&&(
      <form onSubmit={handleSubmit}>
        <input
            
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        /> 
        <input
        
          type="text"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          placeholder="Enter job"
        />
        <button type="submit">Submit</button>
      </form>)} 
          <div >
            <table class="table table-striped" >
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Remove </th>
                </tr></thead>
                {data.map(Employee => (
                <tbody key={Employee.id}>
                <tr>
                    <td>{Employee.name}</td>
                    <td>{Employee.job}</td>
                    <td onClick={() => handleDelete(Employee.id)}><AiFillDelete/></td>
                </tr></tbody>
                
        ))}
      </table></div>
    </div>
  );
};

export default EmpData;
