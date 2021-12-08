const getBaseUrl = url => {
  let BASE_URL = '';
  if (process.env.NODE_ENV === 'development') {
    BASE_URL = '';
  } else {
    BASE_URL = '';
  }
  return BASE_URL;
};

export default getBaseUrl;
