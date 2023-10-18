import  { PureComponent } from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
  },
  {
    name: 'Feb',
    uv: 3000,
  },
  {
    name: 'Mar',
    uv: 2000,
  },
  {
    name: 'Apr',
    uv: 2780,
  },
  {
    name: 'May',
    uv: 1890,
  },
  {
    name: 'Jun',
    uv: 2390,
  },
  {
    name: 'Jul',
    uv: 3490,
  },
  {
    name: 'Aug',
    uv: 3490,
  },
  {
    name: 'Sep',
    uv: 3490,
  },
  {
    name: 'Oct',
    uv: 3490,
  },
  {
    name: 'Nov',
    uv: 3490,
  },
  {
    name: 'Dec',
    uv: 3490,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
