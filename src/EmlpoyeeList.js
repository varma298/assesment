import React from 'react';
import { render } from 'react-dom';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import { useSelector } from 'react-redux';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const EmlpoyeeList = () => {
   const rowData = useSelector(state => state.employeeRedu.employeeList);

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 1200}}>
           <AgGridReact rowData={rowData}>
               <AgGridColumn field="id"></AgGridColumn>
               <AgGridColumn field="name"></AgGridColumn>
               <AgGridColumn field="age"></AgGridColumn>
               <AgGridColumn field="gender"></AgGridColumn>
               <AgGridColumn field="email"></AgGridColumn>
               <AgGridColumn field="phone"></AgGridColumn>

           </AgGridReact>
       </div>
   );
};

export default EmlpoyeeList