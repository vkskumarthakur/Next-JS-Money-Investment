// components/LineChart.js
"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
    datasets: [
      {
        label: '',
        data: [65, 59, 80, 81, 56, 55, 40, 32, 56, 78, 48, 65],
        fill: false,
        backgroundColor: '#202020',
        borderColor: '#202020',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
