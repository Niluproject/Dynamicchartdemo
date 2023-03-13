import React from 'react'
import { Link, NavLink } from "react-router-dom";
function Navbar() {
    return (
      <div>
        <ul className='navbar'>   
        {/* <li><NavLink className='nvlink' to="/">Home</NavLink></li> */}
        <li><NavLink className='nvlink' to="/about">DatePicker</NavLink></li>
        <li><NavLink className='nvlink' to="/datatable">Datatable</NavLink></li>
        <li><NavLink className='nvlink' to="/chart">Chart</NavLink></li>
        <li><NavLink className='nvlink' to="/Linechart">LineChart</NavLink></li>
        <li><NavLink className='nvlink' to="/dchart">Dynamicchart</NavLink></li>
        <li><NavLink className='nvlink' to="/multiselect">MultiSelect</NavLink></li>
        <li><NavLink className='nvlink' to="/tabs">Tabs</NavLink></li>
        {/* <li><NavLink className='nvlink' to="/print">Print</NavLink></li> */}
        {/* <li><NavLink className='nvlink' to="/piechart">PieChart</NavLink></li> */}
        {/* <li><NavLink className='nvlink' to="/tabledata">Tabledata</NavLink></li> */}
        {/* <li><NavLink className='nvlink' to="/user/nilesh">Nilesh</NavLink></li>
        <li><NavLink className='nvlink' to="/user/nill">Nill</NavLink></li> */}
        </ul>
      </div>
    );
  }
  
  export default Navbar;