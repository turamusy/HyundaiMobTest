import {IRootState} from '../interface/IRootState';

const initialState: IRootState = {
  list: {
    data: {
      dataList: [],
    },
    loading: false,
    error: false,
  },
};

export default initialState;
