import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
function Linechart() {
    const data={
        labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets:[
          {
          label: 'Data1',
          data:['10','20','30','40','50','60','70'],
          borderColor: 'Green',
          backgroundColor: 'Green',
          },
          {
            label: 'Data2',
            data:['9','19','29','39','49','59','69'],
            borderColor: 'Red',
            backgroundColor: 'Red',
            }
        ]
      }
      const options={
        responsive:true,
        maintainAspectRatio:false,
      }
    return (
        <div className="App">
            <h1>Line Chart using Chart JS</h1>
            <div> <Line data={data} height={450} width={1288} options={options}></Line></div>
        </div>
    )
}

export default Linechart