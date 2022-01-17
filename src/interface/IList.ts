export interface IList {
  data: {
    dataList: IDataListItem[];
  };
  loading: boolean;
  error: any;
}

export interface IDataListItem {
  type: string;
  public: boolean;
  payload: any;
  repo: {
    id: number;
    name: string;
    url: string;
  };
  actor: {
    id: number;
    login: string;
    gravatar_id: string;
    avatar_url?: string;
    url: string;
  };
  org?: {
    id: number;
    login: string;
    gravatar_id: string;
    url: string;
    avatar_url?: string;
  };
  created_at: string;
  id: string;
}
export interface IListParams {
  page: number;
  per_page: number;
}
