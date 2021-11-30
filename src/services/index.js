export function getUsersApi(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: ['JaxBBLL', 'liusc', 'Jack', 'Tom']
      });
    }, 1400);
  });
}
