// import React, { useState } from 'react';

// function Teams() {
//   const [names, setNames] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [groups, setGroups] = useState([]);

//   const addName = () => {
//     if (inputValue) {
//       setNames([...names, inputValue]);
//       setInputValue('');
//     }
//   };

//   const groupNames = () => {
//     const shuffledNames = [...names].sort(() => Math.random() - 0.5);
//     const numOfGroups = Math.ceil(names.length / 3); // Divide into groups of 3, adjust number as needed
//     const groupedNames = [];

//     for (let i = 0; i < numOfGroups; i++) {
//       groupedNames.push(shuffledNames.slice(i * 3, i * 3 + 3));
//     }

//     setGroups(groupedNames);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Enter a name"
//       />
//       <button onClick={addName}>Add to Text Box</button>
//       <button onClick={groupNames}>Group Names</button>
//       <br />
//       <textarea
//         rows="5"
//         cols="30"
//         value={groups.map((group) => group.join(', ')).join('\n')}
//         readOnly
//       ></textarea>
//     </div>
//   );
// }

// export default Teams;
