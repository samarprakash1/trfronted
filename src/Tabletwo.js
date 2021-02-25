import React from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';

//render a custom componenet to cell in ag grid

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
function Tabletwo() {
//   const actionButton=(params)=>{
//     console.log(params);
//     alert(`${params.data.make} ${params.value}`)
//   }
  const columnDefs= [
    { headerName: "Id", field: "id" },
    { headerName: "Name", field: "name" },
    { headerName: "Email", field: "email" },
    {headerName: "Gender",field:"gender"},
    {headerName: "DOB",field:"dob"},
    {headerName: "Country",field:"country"},
    {headerName: "City",field:"city"},
    // cellRendererFramework:(params)=><div>
    //   <button onClick={()=>actionButton(params)}>Click me</button>
    // </div>}
    ]
  const rowData= [
    { id: "", name: "", email:"",gender:"",dob:"",country:"",city:"" }, 
   ]
   const defaultDef={sortable:true,editable:true,filter:true,floatingFilter:true,flex:1}
  

  return (
    <div className="App">
    <h4>Submitted Data</h4>
     
      <div className="ag-theme-alpine" style={ {height: '400px'} }>
        <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={{flex:1}}
            defaultColDef={defaultDef}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default Tabletwo;