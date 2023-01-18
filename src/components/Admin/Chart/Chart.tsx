import './Chart.css';

//  pour chaque user compteur de connxion +voir une incrémentation

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Lundi',
    'Active User': 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Mardi',
    'Active User': 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mercredi',
    'Active User': 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Jeudi',
    'Active User': 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Vendredi',
    'Active User': 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Samedi',
    'Active User': 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Dimanche',
    'Active User': 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const Chart = () => {
  return (
    <div className="chart">
      <h3 className="chartTitle">Trafic utilisateurs</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
          <Tooltip />
          {<CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
