
import React, {useEffect, useState} from 'react'
// eslint-disable-next-line

import { fetchDailyData } from '../ChartData';
import moment from 'moment'

export const DataTable = () => {
    const [dailyData, setDailyData] = useState([]);
    const fetchApi = async () => {
        const dailyData = await fetchDailyData();
        setDailyData(dailyData);
    };

    useEffect(() => {
        fetchApi();
    }, []);

    const dataTable = dailyData ? (
        <table className="table table-striped">
            <thead>
                <tr >
                <th scope="col">#</th>
                <th>Craeted At</th>
                <th scope="col">Air Pressure</th>
                <th scope="col">Humidity</th>
                <th scope="col">Ambient Temp</th>
                <th scope="col">Light</th>
                </tr>
            </thead>
            <tbody>
                {dailyData.map((item,index)=>(
                    <tr key={index}>
                        <td>{parseInt(index) + 1}</td>
                        <td>{moment(item.created).format('lll')}</td>
                        <td>{item.content.air_pressure}</td>
                        <td>{item.content.humidity}</td>
                        <td>{item.content.ambient_temp}</td>
                        <td>{item.content.light}</td>
                    </tr>
                )) }
            </tbody>
        </table>
    ) : 'No data at this time';

  return(
    <div>
        <div>{dataTable}</div>
    </div>
  )
}
