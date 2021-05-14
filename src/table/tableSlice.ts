import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { AppThunk } from '../app/store';

export enum fields {
  ins = 'ins',
  fb = 'fb',
}

interface Row {
  id: string;
  [fields.ins]: string;
  [fields.fb]: string;
}

const slice = createSlice({
  name: 'rowData',
  initialState: [
    {
      id: '0',
      ins: 'No',
      fb: 'ABC',
    },
    {
      id: '2',
      ins: 'Yes',
      fb: 'DEF',
    },
  ],
  reducers: {
    setFieldValue: (
      state,
      {
        payload,
      }: PayloadAction<{ id: string; field: keyof Row; newValue: string }>
    ) => {
      const row: Row | undefined = state.find((row) => row.id === payload.id);
      if (row) {
        row[payload.field] = payload.newValue;
      }
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
