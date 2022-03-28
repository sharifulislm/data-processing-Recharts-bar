import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Linechart = () => {

    const data = [
        {
          name: 'Supplier A',
          Price: 4000,
          sles: 2400,
          amt: 2400,
        },
        {
          name: 'Supplier B',
          Price: 3000,
          sles: 1398,
          amt: 2210,
        },
        {
          name: 'Supplier C',
          Price: 2000,
          sles: 9800,
          amt: 2290,
        },
        {
          name: 'Supplier D',
          Price: 2780,
          sles: 3908,
          amt: 2000,
        },
        {
          name: 'Supplier E',
          Price: 1890,
          sles: 4800,
          amt: 2181,
        },
        {
          name: 'Supplier F',
          Price: 2390,
          sles: 3800,
          amt: 2500,
        },
        {
          name: 'Supplier G',
          Price: 3490,
          sles: 4300,
          amt: 2100,
        },
      ];

    return (
  <div className=' mt-8'>
      <LineChart width={1000} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="Price" stroke="#8884d8" />
    <Line type="monotone" dataKey="sles" stroke="red" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>

  </div>
    );
};

export default Linechart;