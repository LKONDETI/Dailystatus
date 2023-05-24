// import React from "react";
// import { useState } from "react";

// function TeamGenerator(){

//     const [names, setNames] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const addName = () => {
//     if (inputValue) {
//       setNames([...names, inputValue]);
//       setInputValue('');
//     }
//   };

//     return(
//        <div>
//     {/* //         <h1>Team Generator</h1>
//     //   <div>
//     //   <label><input type="text" onClick={addName} style={{height:'40vh', width:'100vh'}}/></label></div>
//     //   <div>
//     //   <label><input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='name' style={{height:'30px', width:'100vh', marginTop:'10px'}}/><br/>
//     //         <button style={{height:'30px', width:'100vh', backgroundColor:'blue', marginTop:'10px'}}>Add</button>
//     //   </label><br/></div>
//     //   <div style={{marginTop:'10px', height:'50vh', width:'70vh', marginLeft:'300px'}}>
//     //   <label><input type="number"/>
//     //           <button style={{backgroundColor:'green'}}>Gererate</button>
//     //   </label></div> */}
//     <input
//     type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Enter a name"
//       />
//       <button onClick={addName}>Add to Text Box</button>
//       <br />
//       <textarea rows="5" cols="30" value={names.join('\n')} readOnly></textarea>
//     </div>
    
                   

//     )
// }

// export default TeamGenerator;