import { PieChart, Pie, Cell, Label } from 'recharts';

const DoughNutChart = () => {
  const data = [
    { name: 'Geeksforgeeks', students: 400 },
    { name: 'Technical scripter', students: 700 },
    { name: 'Geek-i-knack', students: 200 },
    { name: 'Geek-o-mania', students: 1000 }
  ];

  const colors = ['#FF5733', '#33FF57', '#5733FF', '#33FFC2'];

  return (
    <PieChart width={250} height={250}>
      <Pie data={data} dataKey="students" outerRadius={110} innerRadius={65}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
        <Label width={30} position="center">
            65%
            Total New Customer
        </Label>
      </Pie>
    </PieChart>
  );
}

export default DoughNutChart;
