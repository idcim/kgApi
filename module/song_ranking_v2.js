// 歌曲成绩单V2接口

module.exports = (params, useAxios) => {
  const dfid = params.dfid || "3LWaoY1yhbhy4Lt7El2Jhr3P";
  return useAxios({
    url: '/grow/v1/song_ranking/play_page/v2/ranking_info',
    method: 'GET',
    params: { 
      album_audio_id: params.album_audio_id,
      is_get_all:1,
      userid:0,
      stats_keys:'song_kg_rank_cn_style',
      dfid
     },
    encryptType: 'android',
    cookie: params?.cookie || {},
  });
};
