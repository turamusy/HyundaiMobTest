import {createAsyncThunk} from '@reduxjs/toolkit';
import qs from 'qs';
import {IListParams} from '../interface/IList';
import R from '../resources/R';
import {customAxios} from '../utility/customAxios';

export const getList = createAsyncThunk(
  'list/getList',
  async (params: IListParams) => {
    try {
      const res: any = await customAxios.get(
        `${R.servers.github}${R.url.main.events}?${qs.stringify(params)}`,
      );
      if (res.data) {
        return {dataList: res.data};
      }
    } catch (e) {
      console.error(e);
    }
  },
);
export const updateList = createAsyncThunk(
  'list/updateList',
  async (params: IListParams) => {
    try {
      const res: any = await customAxios.get(
        `${R.servers.github}${R.url.main.events}?${qs.stringify(params)}`,
      );
      if (res.data) {
        return {dataList: res.data};
      }
    } catch (e) {
      console.error(e);
    }
  },
);
