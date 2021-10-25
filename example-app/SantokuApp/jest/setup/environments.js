// テスト時はタイムゾーンを固定する
module.exports = async () => {
  process.env.TZ = 'Asia/Tokyo';
};
