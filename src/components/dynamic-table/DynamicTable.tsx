import React, { useState, useEffect } from 'react';
import TableComponent from '../table/TableComponent';
import axios, { AxiosResponse } from 'axios';

const DATA_URL = 'https://react-ms-data.firebaseio.com/users.json';

const DynamicTable: React.FC = () => {

    const [data, setData]= useState<Array<object> | null>(null);

    useEffect((): void => {
        const fetchData = async () => {
            const result: AxiosResponse = await axios(DATA_URL);
            setData(result.data);
        };
        
        fetchData();     
    },[])

    return (
        <TableComponent rows={data}></TableComponent>
    );
};

export default DynamicTable;