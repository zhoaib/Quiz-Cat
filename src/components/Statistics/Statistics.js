import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';
import './Statistics.css'

const Statistics = () => {
    const data = useLoaderData();

    return (
        <div>
            {
                data.data.map(chart => <Chart
                    key={chart.id}
                    chart={chart}
                ></Chart>)
            }
        </div>
    );
};

export default Statistics;