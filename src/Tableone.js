import React from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import './Button.css'


//render a custom componenet to cell in ag grid

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// const Button = () => {
//     const clickHandle=()=>{
//         console.log("po")
//     }
//     return (
//         <div className="button__container">
//                 <div><button onClick={clickHandle}>Add Row</button></div>
//         <div><button>Delete Selected Rows</button></div>
//         <div><button>Delete Non Selected Rows</button></div>
//         <div><button>Submit</button></div>
            
//         </div>
//     )
// }

function Tableone() {
//   const actionButton=(params)=>{
//     console.log(params);
//     alert(`${params.data.make} ${params.value}`)
//   }
  const columnDefs= [
    { headerName: "Id", field: "id",checkboxSelection:true,},
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
    var rowData= [
        { id: '', name: "", email:"",gender:"",dob:"",country:"",city:"" }, 
       ]
      
   const defaultDef={sortable:true,editable:true,filter:true,floatingFilter:true,flex:1}
  var gridApi=""
   const onGridReady = params => {
    gridApi = params.api;
    
  };
  //ag-Grid add new row functions
 const onAddRow = () => {
    
    gridApi.updateRowData({
      add: [ { id:'', name: "", email:"",gender:"",dob:"",country:"",city:"" }]
         });
}


  return (
    <div className="App">
      <div className="button__container">
      <div>
    
      <div>
                <button onClick={onAddRow}>Add Row</button>
                </div></div>
                <div><button>Delete Selected Rows</button></div>
        <div><button>Delete Non Selected Rows</button></div>
        <div><button>Submit</button></div>
      </div>
      <div className="ag-theme-alpine" style={ {height: '400px'} }>
        <AgGridReact className="grid-ag"
        onGridReady={onGridReady}
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={{flex:1}}
            defaultColDef={defaultDef}>
        </AgGridReact>
      </div>
    </div>
  );
}

export  {Tableone};
