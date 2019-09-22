export default {
  HTTPBASEURL: process.env.HTTPBASEURL,
  HTTPOPENAPIURL: process.env.HTTPOPENAPIURL,
  HTTPHEADER_APPID: '1',
  HTTPHEADER_APPVERSION: '',
  HTTPHEADER_APPSIGN: '',
  PAGE_SIZE: process.env.PAGE_SIZE
};
// process.env.NODE_ENV === 'production' ? 'https://baidu.com/' : '/'
// console.log(process.env.NODE_ENV);
// console.log(process.env.HTTPOPENAPIURL);