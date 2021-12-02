import { request } from '@/common/request';

export const getAqListApi = data =>
  request('GET', `/api/v1/xcx/wd/page`, data, true, false);

function getData(pageNumber, pageSize = 15) {
  const result = Array.from(new Array(pageSize)).map((item, index) => {
    return {
      id: (pageNumber - 1) * pageSize + index,
      title: '墙面潮湿掉皮怎么处理',
      createTime: +new Date(Math.floor(Math.random() * 100000 + 1636363037000)),
      view: Math.floor(Math.random() * 10 + 10),
      thumbnail:
        'https://i.picsum.photos/id/69/300/200.jpg?hmac=eLc6u_j4wqI6rURIhekE0kS1oYHTmD7tNZ1LeEPyIeY'
    };
  });
  return pageNumber > 3 ? [] : result;
}

export const getListApi = ({ pageNumber, pageSize }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: getData(pageNumber, pageSize)
      });
    }, 300);
  });
};
