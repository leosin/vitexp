import axios from 'axios';

//全局配置
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.timeout = 5000;

export function request(config) {
  const instace = axios.create({
    timeout: 50000,
    method: 'get',
  });

  //请求拦截
  instace.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {}
  );
  //响应拦截
  instace.interceptors.response.use(
    (res) => {
      return res.data;
      // console.log(res.data)
    },
    (err) => {
      //错误处理
    }
  );
  return instace(config);
}
