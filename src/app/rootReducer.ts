import { combineReducers } from '@reduxjs/toolkit';
import rowDataReducer from '../table/tableSlice';

const rootReducer = combineReducers({
  rowData: rowDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
