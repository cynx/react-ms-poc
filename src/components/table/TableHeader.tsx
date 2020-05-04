import React from 'react';
import {TableHeaders} from './TableTypes';

const TableHeader: React.FC<{headers: TableHeaders}> = ({ headers }) => {
    return (
        <thead>
        <tr>
          { headers && headers.map((value, index) => {
              return <th key={index}><div>{value}</div></th>
          })}
        </tr>
    </thead>
    );
};

export default TableHeader;
