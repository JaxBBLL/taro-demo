import Taro from '@tarojs/taro';
import { objReduce } from './util.js';

const BASE_URL = '';

export function request(
  method,
  url,
  data = {},
  removeEmpty = true,
  useLoading = true
) {
  useLoading &&
    Taro.showLoading({
      title: '加载中'
    });
  return new Promise((resolve, reject) => {
    const sendData = objReduce(data, removeEmpty);

    Taro.request({
      url: BASE_URL + url,
      method: method,
      dataType: 'json',
      data: sendData,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function({ data: res }) {
        console.log(url, res);
        if (res.code === 200) {
          resolve(res);
        } else if (res.code === 500) {
          Taro.showToast({
            title: res.message,
            icon: 'none',
            duration: 2000
          });
          reject(res);
        } else {
          reject(res);
        }
      },
      fail: function(err) {
        reject(err);
      },
      complete: function() {
        useLoading && Taro.hideLoading();
      }
    });
  });
}
