import '../App.css';
import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState, useMemo } from "react";
import Button from "react-bootstrap/Button";
import DataTable from "react-data-table-component";
import { read, utils, writeFile } from "xlsx";
import datajson from "./data.json";
const handleButtonClick = (e, email) => {
  e.preventDefault();
  alert(`${email}`);
};


const Databledemo = () => {

  const columns = [
    {
      name: "Sr_No",
      selector: (row, index) => index + ids,
      // sortable: true,
      width: "10%",
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Phone",
      selector: "phone",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "DOB",
      selector: "dob",
    },
    {
      name: "Actions",
      button: true,
      cell: (row) => (
        <button
          className="btn btn-outline btn-xs"
          onClick={(e) => handleButtonClick(e, row.email)}
        >
          Edit
        </button>
      ),
    },
  ];


  // const [editingId, setEditingId] = useState(null);
  const [data, setData] = useState(datajson);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const [currentRowsPerPage, setcurrentRowsPerPage] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);
  const [ids, setids] = useState(1);
  console.log(currentPage);
  useEffect(() => {
    setids(currentRowsPerPage * currentPage - (currentRowsPerPage - 1));
  }, [currentPage, currentRowsPerPage]);
  const chanepage = (page, totalRows) => {
    setcurrentPage(page);
  };
  const RowPerPage = (currentRowsPerPage, page) => {
    setcurrentRowsPerPage(currentRowsPerPage);
    setcurrentPage(page);
  };

  const filteredData = useMemo(() => {
    if (!searchQuery) {
      return data;
    }

    return data.filter((row) => {
      const name = row.name.toLowerCase();
      const phone = row.phone.toLowerCase();
      const email = row.email.toLowerCase();
      const dob = row.dob.toLowerCase();
      const query = searchQuery.toLowerCase();

      return (
        name.includes(query) ||
        phone.includes(query) ||
        email.includes(query) ||
        dob.includes(query)
      );
    });
  }, [data, searchQuery]);

  const handleExport = () => {
    const headings = [["Name", "Phone", "Email", "DOB"]];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet([]);
    utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, datajson, { origin: "A2", skipHeader: true });
    utils.book_append_sheet(wb, ws, "Report");
    writeFile(wb, "datajson Report.xlsx");
  };

  useEffect(() => {
    // fetch the Data.json file and set it to the data state variable
    fetch("/path/to/data.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <h3>DataTable in React</h3>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearch}
      />
      <Button
        onClick={handleExport}
        className="btn btn-primary float-right btnexp"
        variant="success"
      >
        Export <i className="fa fa-download"></i>
      </Button>
      <DataTable
        title="Employees Data"
        columns={columns}
        data={filteredData}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[5, 10, 15, 20]}
        fixedHeader
        highlightOnHover
        striped
        selectableRowsNoSelectAll
        // responsive
        // progressPending
        // dense={true}
        selectableRows
        selectableRowsHighlight
        onChangePage={chanepage}
        onChangeRowsPerPage={RowPerPage}
      // actions={<button className='btn btn-info'>Export</button>}
      // subHeaderComponent={
      //   <input
      //     type="text"
      //     placeholder="Search"
      //     value={searchQuery}
      //     onChange={handleSearch}
      //   />
      // }
      />
    </div>
  );
};

export default Databledemo;
