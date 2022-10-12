import React from 'react';

import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Chart = ({ chart }) => {

    const { name, total } = chart

    return (
        <div>

            <LineChart width={500} height={400} data={chart}>
                <Line type="monotone" dataKey="name" stroke="#82ca9d" />
                <XAxis dataKey="total" />
                <YAxis />
            </LineChart>


        </div>
    );
};

export default Chart;