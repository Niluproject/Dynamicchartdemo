import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarmenu() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Demo</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/about" className="nav-link">DatePicker</Link>
            <Link to="/datatable" className="nav-link">Datatable</Link>
            <Link to="/chart" className="nav-link">Chart</Link>
            <Link to="/Linechart" className="nav-link">LineChart</Link>
            <Link to="/barchart" className="nav-link">BarChart</Link>
            <Link to="/horizontal" className="nav-link">Horizontal</Link>
            <Link to="/gradient" className="nav-link">Gradient</Link>
            <Link to="/dchart" className="nav-link">Dynamicchart</Link>
            <Link to="/multiselect" className="nav-link">MultiSelect</Link>
            <Link to="/tabs" className="nav-link">Tabs</Link>
            <Link to="/aggrid" className="nav-link">AgGrid</Link>
            <Link to="/apigrid" className="nav-link">ApiAgGrid</Link>
            <Link to="/sign" className="nav-link">Sign Up</Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarmenu;
