import React from 'react';
import {TableRows, TableHeaders} from './TableTypes';

const TableBody: React.FC<{headers: TableHeaders, rows: TableRows}> = ({headers, rows}) => {

    const columnSpan = headers ? headers.length : 0;
    const showSpinner = rows === null;

    const buildRow = (row: any, headers: TableHeaders) => {
        return (
             <tr key={row.id}>
             { headers.map((value, index: number) => {
                 return <td key={index}>{row[value]}</td>
              })}
             </tr>
         )
      };

    return (
        <tbody>
        {showSpinner &&
          <tr key="spinner-0">
              <td colSpan={columnSpan} className="text-center">
                  <div className="spinner-border" role="status">
                      <span className="sr-only">Fetching Data...</span>
                  </div>
              </td>
          </tr>
          }
        { !showSpinner && rows && rows.map((value: any) => {
              return buildRow(value, headers);
          })}
    </tbody>

    );
};

export default TableBody;