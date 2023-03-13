import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios';
function Tabledata() {
    const[search, setSearch] = useState("");
    const[countries, setCountries] = useState([]);
    const[filteredcountries, setFilteredcountries] = useState([]);


    const getCountries = async () =>{
        try{
            const response = await axios.get("http://localhost:4000/students")
            setCountries(response.data);
            setFilteredcountries(response.data);

        }catch(error){
            console.log(error);
        }
    };

    const columns = [
        {
            name: "Roll Number",
            selector: (row) => row.rollno,
            sortable: true
        },
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true
        },
        {
            name: "Action",
            cell: (row) => <button className='btn btn-primary' onClick={() => alert(row._id)}>Edit</button>
        }
    ]

    useEffect(()=>{
        getCountries();
    },[]);

    useEffect(()=>{
        const result = countries.filter(country => {
            return country.name.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilteredcountries(result);
    },[search])

  return (
        <DataTable
        title="Employee Data"
        columns={columns}
        data={filteredcountries} 
        pagination
        fixedHeader
        highlightOnHover
        selectableRows
        selectableRowsHighlight
        subHeader
        subHeaderComponent = {
            <input type="text" placeholder='Search Here' className='w-25 form-control' value={search} onChange={(e) =>setSearch(e.target.value)}/>
        }
        />
  )
}

export default Tabledata