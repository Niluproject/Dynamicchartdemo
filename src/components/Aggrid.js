import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import Form from 'react-bootstrap/Form';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

function Aggrid() {

  const actionButton = (params) => {
    console.log(params);
    alert(`${params.data.name} ${params.data.age}`)
  }

  let gridApi;
  const columnDefs = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Age', field: 'age' },
    { headerName: 'Birth Year', field: 'birthYear' },
    { headerName: 'Phone Number', field: 'phoneNumber' },
    {
      headerName: "Action",
      cellRendererFramework: (params) => <div>
        <button onClick={() => actionButton(params)}>Click me</button>
      </div>
    }
  ];
  const rowData = [
    { name: 'Nilesh', age: 19, phoneNumber: 9876543210, birthYear: 2001 },
    { name: 'Khyati', age: 17, phoneNumber: 9827654310, birthYear: 2003 },
    { name: 'Vikas', age: 25, phoneNumber: 9765438210, birthYear: 1995 },
    { name: 'Khushal', age: 19, phoneNumber: 9876543210, birthYear: 2001 },
    { name: 'Nill', age: 17, phoneNumber: 9827654310, birthYear: 2003 },
    { name: 'Heli', age: 25, phoneNumber: 9765438210, birthYear: 1995 },
    { name: 'Viks', age: 19, phoneNumber: 9876543210, birthYear: 2001 },
    { name: 'Nirmit', age: 17, phoneNumber: 9827654310, birthYear: 2003 },
    { name: 'Chetansir', age: 25, phoneNumber: 9765438210, birthYear: 1995 },
    { name: 'Naveender', age: 19, phoneNumber: 9876543210, birthYear: 2001 },
    { name: 'Rajveer', age: 17, phoneNumber: 9827654310, birthYear: 2003 },
    { name: 'Hardik', age: 25, phoneNumber: 9765438210, birthYear: 1995 },
  ];
  // Style the search field start //
  const searchDivStyle = { backgroundColor: "#dedede", padding: 10 }
  const searchStyle = {
    width: "100%", padding: "10px 20px", borderRadius: 20, outline: 0,
    border: "2px rgb(33 37 41) solid", fontSize: "100%"
  }
  // Style the search field end // 

  const defaultColDef = {
    sortable: true,
    editable: true,
    flex: 1,
    filter: true,
    floatingFilter: true,
  };
  const onGridReady = (params) => {
    gridApi = params.api;
    params.api.paginatioGoToPage(5)
  };
  const onExportClick = () => {
    gridApi.exportDataAsCsv();
  };

  // Global search field start //

  const onFilterTextChange = (e) => {
    console.log(e.target.value);
    gridApi.setQuickFilter(e.target.value);
  }

  // Global search field End //

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h3>Student Details</h3>
      {/* <Form.Control
        type="search"
        onChange={onFilterTextChange}
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      /> */}
      <div style={searchDivStyle}>
        <input type="search" style={searchStyle} onChange={onFilterTextChange} placeholder="search somethings..." />
      </div>
      <button onClick={() => onExportClick()}>Export</button>
      <div className="ag-theme-alpine" style={{ height: '500px' }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          pagination={true}
          paginationPageSize={5}
        ></AgGridReact>
      </div>
    </div>
  );
}

export default Aggrid;
