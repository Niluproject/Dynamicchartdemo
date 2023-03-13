import React, { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const Dynamicchart = () => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'My dataset',
                data: [],
                backgroundColor: [],
            },
        ],
    });

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        // Group the data by userId
        const groupedData = data.reduce((acc, { userId }) => {
            console.log(data);
            acc[userId] = acc[userId] || 0;
            acc[userId]++;
            return acc;
        }, {});

        // Convert the grouped data into chart data
        const labels = Object.keys(groupedData).map((userId) => `User ${userId}`);
        const dataValues = Object.values(groupedData);
        const backgroundColor = ['#FF6384', '#36A2EB', '#FFCE56'];

        setChartData({
            labels,
            datasets: [
                {
                    label: 'My dataset',
                    data: dataValues,
                    backgroundColor,
                },
            ],
        });
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            color: '#000000',
            font: {
              size: 10,
              weight: 'bold'
            },
            formatter: function (value, context) {
              console.log(context);
              return context.chart.data.labels[context.dataIndex] + ': ' + value;
            }
          }
        }
      }
      
    return (
        <div style={{ height: '550px' , width: '1750px' }}>
            <button onClick={fetchData}>Fetch data</button>
            <Pie data={chartData} options={options} />
        </div>
    )
}

export default Dynamicchart