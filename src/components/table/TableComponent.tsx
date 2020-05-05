import React from 'react';
import Table from 'react-bootstrap/Table';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import {TableRows} from './TableTypes';

const TableComponent: React.FC<{data: TableRows}> = ({data}) => {
    const headers = (data && data.length && Object.keys(data[0])) || [];

    return (
        <Table striped bordered hover >
            <TableHeader headers={headers}></TableHeader>
            <TableBody headers={headers} rows={data}></TableBody>
        </Table>
    );
};

export default TableComponent;