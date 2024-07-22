"use client"
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register the components required for Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const DoughnutChart = () => {
  // Sample data for the doughnut chart
  const data = {
    labels: [],
    datasets: [
      {
        label: 'My Doughnut Chart',
        data: [50, 40, 60, 50, 100, 30], // Data points
        backgroundColor: [
          '#134B70',
          '#d1f2f9',
          '#f7f9d2',
          '#37B7C3',
          '#903340',
          'rgba(255, 159, 64, 0.2)'
        ],
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)'
        // ],
        borderWidth: 0,
      }
    ]
  };

  // Options for the doughnut chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (context.parsed !== null) {
              label += ': ' + context.parsed + '%';
            }
            return label;
          }
        }
      }
    }
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
