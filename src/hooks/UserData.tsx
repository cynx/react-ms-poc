import {useState, useEffect} from 'react';
import axios, { AxiosResponse } from 'axios';

const DATA_URL = 'https://react-ms-data.firebaseio.com/users.json';

const useUserData = () => {
    const [data, setData]= useState<Array<object> | null>(null);

    useEffect((): void => {
        const fetchData = async () => {
            const result: AxiosResponse = await axios(DATA_URL);
            setData(result.data);
        };
        
        fetchData();     
    },[]);

    return data;
};

export default useUserData;