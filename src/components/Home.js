import React from 'react'
import { Link } from "react-router-dom";
function Home() {
    return (
      <div>
        <h1>Test Home</h1>
        <p>Hello page is the  best page</p>
        <Link to="/about">Go to About page</Link>
      </div>
    );
  }
  
  export default Home;