import HTTPREQUEST from './http';

export const getResultDataApi = postData => {
  return HTTPREQUEST.get('/api/v1/xcx/productAd', postData);
};
