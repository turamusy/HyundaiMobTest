import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import {getList, updateList} from '../actions/list.action';
import {IList} from '../interface/IList';
import initialState from '../store/initialState';

export const list = createSlice({
  name: 'list',
  initialState: initialState.list,
  reducers: {
    reset: _ => initialState.list,
  },
  extraReducers: builder => {
    builder.addMatcher(isAnyOf(getList.pending), (state: IList) => {
      state.loading = true;
    });
    builder.addMatcher(
      isAnyOf(getList.fulfilled),
      (state: IList, action: any) => {
        if (action.payload?.error) {
          state.error = {...state.error, ...action.payload.error};
        } else {
          state.data = {...action.payload};
          state.loading = false;
          state.error = undefined;
        }
      },
    );
    builder.addMatcher(
      isAnyOf(updateList.fulfilled),
      (state: IList, action: any) => {
        if (action.payload?.error) {
          state.error = {...state.error, ...action.payload.error};
        } else {
          state.data.dataList = [
            ...state.data.dataList,
            ...action.payload.dataList,
          ];
          state.loading = false;
          state.error = undefined;
        }
      },
    );

    builder.addMatcher(isAnyOf(getList.rejected), (state: IList, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
