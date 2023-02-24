import React from 'react';
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
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import ButtonGroup from '../buttonGroup';


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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: false
    }
  }
};

const labels = ['18/02', '19/02', '20/02', '21/02', '22/02', '23/02', '24/02'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: '',
      data: labels.map(() => faker.datatype.number({ min: 8000, max: 10000 })),
      borderColor: '#00ab4e',
      backgroundColor: 'rgba(0,171,78,.1)',
    },
  ],
};

export default function Chart() {
  return (
    <div>
      <ButtonGroup />
      <Line options={options} data={data} />
    </div>
  )
}
