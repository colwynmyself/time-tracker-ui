import fetch from 'isomorphic-fetch';

const checkResponse = (res) => {
  if (res.status >= 200 && res.status < 300) {
    return res.status === 204 ? Promise.resolve() : res.json();
  }

  const err = new Error(res.statusText);
  err.res = res;
  throw err;
};

export const request = (url, method = 'GET', reqBody, opts = {}) => {
  const requestObject = {
    method,
    headers: {
      Authenticaion: `Bearer ${window.localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
  };

  if (reqBody) {
    if (typeof reqBody !== 'string') requestObject.body = JSON.stringify(reqBody);
    else requestObject.body = reqBody;
  }

  Object.assign(requestObject, opts);

  return fetch(url, requestObject)
    .then(checkResponse);
};

const apiHost = process.env.REACT_APP_TIME_TRACKER_API_HOST;
export const apiRequest = (url, method, reqBody, opts) => {
  let requestUrl = url;

  if (!requestUrl.match(/^http/)) {
    if (!requestUrl.match(/^\//)) requestUrl = `/${requestUrl}`;

    requestUrl = `${window.location.protocol}//${apiHost}${requestUrl}`;
  }

  return request(requestUrl, method, reqBody, opts);
};
