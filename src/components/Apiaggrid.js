import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

function Apiaggrid() {
    const [gridApi, setGridApi] = useState()
    const columnDefs = [
        { headerName: "ID", field: "id", checkboxSelection: true, headerCheckboxSelection: true, },
        { headerName: "Name", field: "name", },
        { headerName: "Email", field: "email", tooltipField: 'name' },
        { headerName: "Phone", field: "phone" },

    ]

    const defaultColDef = {
        sortable: true,
        editable: true,
        flex: 1, filter: true,
        floatingFilter: true,
    }

    const onGridReady = (params) => {
        setGridApi(params)
        fetch("https://jsonplaceholder.typicode.com/users").then(resp => resp.json())
            .then(resp => {
                console.log(resp);
                params.api.applyTransaction({ add: resp }) //adding API data to grid
                params.api.paginationGoToPage(10)
            })

    }
    const onPaginationChange = (pageSize) => {
        gridApi.api.paginationSetPageSize(Number(pageSize))
    }
    return (
        <div className="App">
            <h1 align="center">React-App</h1>
            <h3>Student Details</h3>
            <select onChange={(e) => onPaginationChange(e.target.value)}>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
            </select>
            <div className="ag-theme-alpine" style={{ height: '400px' }}>
                <AgGridReact
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    onGridReady={onGridReady}
                    pagination={true}
                    paginationPageSize={10}
                    enableBrowserTooltips={true}
                // paginationAutoPageSize={true}
                >
                </AgGridReact>
            </div>
        </div>
    );
}

export default Apiaggrid
