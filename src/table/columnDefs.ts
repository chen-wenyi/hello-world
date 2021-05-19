import {
  ColDef,
  ColGroupDef,
  ValueSetterParams,
  ValueGetterParams,
} from 'ag-grid-community';
import store from '../app/store';
import { actions, fields } from './tableSlice';

export const defaultColumnDefs: ColDef = {
  valueSetter: (p: ValueSetterParams) => {
    store.dispatch(
      actions.setFieldValue({
        id: p.data.id,
        field: p.colDef.field as any,
        newValue: p.newValue,
      })
    );
    return true;
  },
};

export const columnDefs: (ColDef | ColGroupDef)[] = [
  {
    headerName: '#',
    maxWidth: 100,
    valueGetter: function (params) {
      return params.node.rowIndex;
    },
  },
  {
    headerName: 'Insta',
    field: fields.ins,
    editable: true,
  },
  {
    headerName: 'Feb',
    field: fields.fb,
    editable: true,
  },
  {
    headerName: 'Combine',
    valueGetter: (params: ValueGetterParams) => {
      return params.data.ins + ' ' + params.data.fb;
    },
  },
];
