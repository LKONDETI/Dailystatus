// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CRUDBooks = () => {
//   const [users, setUsers] = useState([]);
//     const [newUser, setNewUser] = useState('');
//   useEffect(() => {
//     getUsers();
//   }, []);

//   const getUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const addUser = async () => {
//     try {
//       const response = await axios.post('http://localhost:3001/users', newUser);
//       setUsers([...users, response.data]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteUser = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3001/books/${id}`);
//       setUsers(users.filter((user) => user.id !== id));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//        <input value={newUser} placeholder='add books' onChange={e => setNewUser(e.target.value)}/>
//       <button onClick={addUser}>Add</button>
//       <ul>
//         {users.map((name) => (
//           <li key={user.id}>
//             {user.name}
//             <button onClick={() => deleteUser(user.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CRUDBooks;
