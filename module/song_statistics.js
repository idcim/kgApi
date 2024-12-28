// 歌词搜索
const { appid, clientver,srcappid,mid } = require('../util');

module.exports = (params, useAxios) => {
  var date = new Date();
  const dfid = params?.dfid || params?.cookie?.dfid || '3LWaoY1yhbhy4Lt7El2Jhr3P';
  const dataMap = {
    srcappid,
    clientver,
    clienttime: date.getTime(),
    mixsongid: params?.mixsongid || 0,
    appid,
    userid:'null',
    token:'null',
    dfid,
    
  };

  return useAxios({
    baseURL: 'https://musicpush.kugou.com',
    url: '/v1/statistics/songstatistics',
    method: 'GET',
    params: dataMap,
    cookie: params?.cookie || {},
    encryptType: 'web'
  });
};
