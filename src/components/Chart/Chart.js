import React from 'react';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = ({ chart }) => {

    const { name, total } = chart
    const data = [{ name, total }]

    return (
        <div>

            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="name" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total" />
                <Tooltip></Tooltip>
            </LineChart>



        </div>
    );
};

export default Chart;