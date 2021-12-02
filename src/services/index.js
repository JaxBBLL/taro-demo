import { request } from '@/common/request';

export const getAqListApi = data =>
  request('GET', `/api/v1/xcx/wd/page`, data, true, false);
