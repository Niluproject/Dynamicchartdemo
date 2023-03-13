import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import DataTable from 'react-data-table-component';
import { read, utils, writeFile } from 'xlsx';
import datajson from './data.json'

const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Phone',
    selector: 'phone',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
  {
    name: 'DOB',
    selector: 'dob',
  },
];



const Databledemo = () => {

  const [data, setData] = useState(datajson);
  const [searchQuery, setSearchQuery] = useState('');

  const handleExport = () => {
    const headings = [[
        'Name',
        'Phone',
        'Email',
        'DOB'
    ]];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet([]);
    utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, datajson, { origin: 'A2', skipHeader: true });
    utils.book_append_sheet(wb, ws, 'Report');
    writeFile(wb, 'datajson Report.xlsx');
}

  useEffect(() => {
    // fetch the Data.json file and set it to the data state variable
    fetch('/path/to/data.json')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    <div>
    <h3>DataTable in React</h3>
    <Button  onClick={handleExport} className="btn btn-primary float-right" variant="success">
                        Export <i className="fa fa-download"></i></Button>
      <DataTable
        title="Employees"
        columns={columns}
        data={data}
        pagination
        fixedHeader
        highlightOnHover
        striped
        selectableRowsNoSelectAll
        // responsive
        // progressPending
        // dense={true}
        selectableRows
        selectableRowsHighlight
      />
    </div>
  )
}

export default Databledemo