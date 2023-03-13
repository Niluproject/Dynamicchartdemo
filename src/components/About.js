import React, { useState ,useRef } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
console.log(process.env);
function About(props) {

  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
    console.log(setDate);
  };
  return (
    <div>
      <h1>About Page Key using env : {process.env.REACT_APP_SECRET_KEY}</h1>
      <p>Hello page is the  best page for using common url: {process.env.REACT_APP_COMMAN_URL} </p>
      <h1>Hello {props.name}</h1>
      <Link to="/">Go to Home page</Link>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <input
        type="date"
        onChange={handleChange}
        ref={dateInputRef}
      />
      <p>Selected Date: {date}</p>
    </div>
  );
}

export default About;