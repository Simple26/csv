import { createApp } from "vue";
import App from "./App.vue";
import { request } from "./network/request";

createApp(App).mount("#app");

request({
  url: "/home/multidata",
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// axios({
//   url: "http://123.207.32.32:8000/home/multidata",
// }).then((res) => {
//   console.log(res);
// });
// axios({
//   url: "http://123.207.32.32:8000/home/data",
//   params: {
//     type: "pop",
//     page: 1,
//   },
// }).then((res) => {
//   console.log(res);
// });
//axios并发请求
// axios          //这是全局axios,没有创建axios实例
//   .all([      //axios.defaults.baseURL='http://123.207.32.32:8000'
//     axios({   //axios.default.timeout=5000
//       url: "http://123.207.32.32:8000/home/multidata",
//     }),
//     axios({
//       url: "http://123.207.32.32:8000/home/data",
//       params: {
//         type: "sell",
//         page: 3,
//       },
//     }),
//   ])
//   //   .then((result) => {
//   //     console.log(result);
//   //   });
//   .then(
//     axios.spread((res1, res2) => {
//       console.log(res1);
//       console.log(res2);
//     })
//   );

//创建axios实例
// const axios1 = axios.create({
//   baseURL: "http://123.207.32.32:8000",
//   timeout: 5000,
// });

// axios1({
//   url: "home/multidata",
// }).then((res) => {
//   console.log(res);
// });
// axios1({
//   url: "home/data",
//   params: {
//     type: "pop",
//     page: 1,
//   },
// }).then((res) => {
//   console.log(res);
// });

//封装request模块
// import {request} from './network/request'

// request({
//     url:'/home/multidata'
// },res=>{
//     console.log(res)
// },err=>{
//     console.log(err)
// })
