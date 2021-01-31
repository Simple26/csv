import axios from "axios";

export function request(config) {
  //1、创建axios实例
  const instance1 = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000,
  });
  //2、axios拦截器
  axios.interceptors; //拦截全局
  instance1.interceptors.request.use(
    (config) => {
      console.log(config);
      //比如config中的信息不符合服务器要求
      //比如每次发送请求时，希望页面显示一个请求图标
      //某些网络请求（登录{token}）,必须携带一些特殊信息
      return config;
    },
    (err) => {}
  );
  instance1.interceptors.response.use(
    (res) => {
      console.log(res);
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );
  //3、发送真正的请求
  return instance1(config); //本身就是个promise
}

//return new Promise((resolve, reject) => {
// const instance1 = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 5000,
//   });
//  return instance1(config)
//   .then((res) => {
//     resolve(res);
//   })
//   .catch((err) => {
//     reject(err);
//   });
//});
