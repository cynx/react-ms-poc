import React from 'react';
import TableComponent from '../table/TableComponent';
import useUserData  from '../../hooks/UserData';

const DynamicTable: React.FC = () => {

   const UserData = useUserData();

    return (
        <TableComponent data={UserData}></TableComponent>
    );
};

export default DynamicTable;