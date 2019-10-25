import Taro from '@tarojs/taro';

export function request(method, url, data = {}) {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: url, // 仅为示例，并非真实的接口地址
      method: method,
      dataType: 'json',
      data: data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        resolve(res.data);
      },
      fail: function(err) {
        reject(err);
      }
    });
  });
}
