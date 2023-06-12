import React from "react";
import RePieChart from "./PieChart";
import NavSideBars from "../Auth/NavSideBars";

function Dashboard(){

  return(
    <div>
        
        <div> <NavSideBars/> </div>
      
      <div class="container">
        <div class="row gap-4" style={{marginLeft:'150px'}}>

          {/* Total Points container */}
          <div class=" shadow rounded-4 col p-1 border border-dark border border-2">
            <h6 class="text-center">Total Points</h6>
            <div class="d-flex p-3">
            <p>Points scored by Subcriptions</p>
            <div class="rounded-circle border border-4 border border-danger p-4" style={{width:'120px'}}><h6 class="text-center">{localStorage.getItem("points")}</h6></div>
            </div></div>

            {/*Books Subcription container */}
            <div class=" shadow rounded-4 col p-1 border border-dark border border-2">
            <h6 class="text-center">Books Subcribed</h6>
            <div class="d-flex p-3">
            <p>Number of Books read</p>
            <div class="rounded-circle border border-4 border border-primary p-4" style={{width:'120px'}}><h6 class="text-center">{localStorage.getItem("count")}</h6></div>
            </div></div>

            {/* Active books Subcription container */}
            <div class=" shadow rounded-4 col p-1 border border-dark border border-2">
            <h6 class="text-center">Active Subcriptions</h6>
            <div class="d-flex p-3">
            <p>Number of books currently reading</p>
            <div class="rounded-circle border border-4 border border-success p-4" style={{width:'120px'}}><h6 class="text-center">1</h6></div>
            </div></div>

            {/* next row */}
            <div class="row gap-3">

              {/* table of top subcriptions */}
            <div class=" shadow rounded-4 col p-1 border border-dark border border-2">
            <h5 class="text-center">Top subcriptions by time</h5>
            <div class="table " style={{marginLeft:'120px'}}>
              <thead style={{backgroundColor:'#0c1524', color:'white'}}>
                    <tr>
                        <th>Name</th>
                        <th>Points</th>
                    </tr></thead>
                    <tbody>
                    <tr style={{backgroundColor:'lightgrey'}}>
                      <td>Tanmay Sant</td>
                      <td>1900</td>
                    </tr>
                    <tr>
                      <td>Biswajit Mishra</td>
                      <td>1891</td>
                    </tr>
                    <tr style={{backgroundColor:'lightgrey'}}>
                      <td>Ankur Sharma</td>
                      <td>1700</td>
                    </tr>
                    <tr>
                      <td>Preeti Pathak</td>
                      <td>1500</td>
                    </tr>
                    <tr style={{backgroundColor:'lightgrey'}}>
                      <td>Milan Banerjee</td>
                      <td>1200</td>
                    </tr></tbody>
                    </div></div>
                    
            {/* Trend Chart */}
            <div class=" shadow rounded-4 col p-1 border border-dark border border-2">
            <h5 class="text-center">Trend Charts</h5>
            <div><RePieChart/></div>
            </div>
            </div>
        </div>

      </div>
      <footer style={{fontSize:'10px'}}>Capgemini Public</footer>
      </div>
  )
}

export default Dashboard;
