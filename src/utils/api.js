const TIMEOUT = 1000;
const dummyKeys = ['asd', 'qwe', 'zxc'];
const dummyNtfs = ['test.onet.pl', 'cycki.onet.pl', 'dupa.onet.pl'];


export const getApiKeys = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(dummyKeys);
    }, TIMEOUT);
  })
};

export const getNotifications = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(dummyNtfs);
    }, TIMEOUT);
  })
};