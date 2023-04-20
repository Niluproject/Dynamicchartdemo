import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './Navbar';
import Users from './Users';
import Didmount from './components/Didmount';
import Didupdate from './components/Didupdate';
import Shouldupdate from './components/Shouldupdate';
import Databledemo from './components/Databledemo';
import Tabledata from './components/Tabledata';
import Chart from './components/Chart';
import PieChart from './components/PieChart';
import Linechart from './components/Linechart';
import Barchart from './components/Barchart';
import Horizontolchart from './components/Horizontolchart';
import Gradientchart from './components/Gradientchart';
import Dynamicchart from './components/Dynamicchart';
import MultiSelectt from './components/Multiselectt';
import Tabss from './components/Tabss';
import Print from './components/Print';
import Navbarmenu from './components/Navbarmenu';
import Aggrid from './components/Aggrid';
import Apiaggrid from './components/Apiaggrid';
import Signup from './components/Signup';
import Antddemo from './components/Antddemo';
import Test from './components/Test';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarmenu />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datatable" element={<Databledemo />} />
          <Route path="/tabledata" element={<Tabledata />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/Linechart" element={<Linechart />} />
          <Route path="/barchart" element={<Barchart />} />
          <Route path="/horizontal" element={<Horizontolchart />} />
          <Route path="/print" element={<Print />} />
          <Route path="/piechart" element={<PieChart />} />
          <Route path="/dchart" element={<Dynamicchart />} />
          <Route path="/multiselect" element={<MultiSelectt />} />
          <Route path="/gradient" element={<Gradientchart />} />
          <Route path="/tabs" element={<Tabss />} />
          <Route path="/aggrid" element={<Aggrid />} />
          <Route path="/apigrid" element={<Apiaggrid />} />
          <Route path="/sign" element={<Signup />} />
          <Route path="/antd" element={<Antddemo />} />
          <Route path="/about" element={<About name="Nilesh" />} />
          <Route path="/user/:name" element={<Users />} />
          {/* <Route path="/user/:name" element={<Lazyload />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Shouldupdate /> */}
      {/* <Test /> */}
    </div>
  );
}

export default App;
