import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';

// Declare chartRef outside of the component function to maintain reference
let myChart = null;

const GradientChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(54, 162, 235, 0.2)');
        gradient.addColorStop(1, 'rgba(54, 162, 235, 0.8)');

        if (myChart) {
            myChart.destroy();
        }

        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: gradient,
                    },
                ],
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        });
    }, []);

    return (
        <div>
            <h2>Sales Bar Chart with Gradient Fill</h2>
            <canvas ref={chartRef} />
        </div>
    );
};

export default GradientChart;

