import React from 'react';
import Table from 'react-bootstrap/Table';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import {TableRows} from './TableTypes';

const TableComponent: React.FC<{rows: TableRows}> = ({rows}) => {
    const headers = (rows && rows.length && Object.keys(rows[0])) || [];

    return (
        <Table striped bordered hover >
            <TableHeader headers={headers}></TableHeader>
            <TableBody headers={headers} rows={rows}></TableBody>
        </Table>
    );
};

export default TableComponent;