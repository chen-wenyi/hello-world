import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import classNames from 'classnames';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import style from './index.module.css';
import { columnDefs, defaultColumnDefs } from './columnDefs';
import { useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';

const tableClass = classNames('ag-theme-alpine-dark', style.table);

export const Table: React.FC = () => {
  const rowData = useSelector((state: RootState) => state.rowData);

  return (
    <div className={tableClass}>
      <AgGridReact
        defaultColDef={defaultColumnDefs}
        columnDefs={columnDefs}
        immutableData={true}
        rowData={rowData}
        getRowNodeId={(data) => data.id}
        enableRangeSelection={true}
      ></AgGridReact>
    </div>
  );
};
