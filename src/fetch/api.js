import axios from 'axios'

/*由于axios配置content-type的bug，需要在申请post请求时，引入序列化组件对传递参数进行序列化操作*/
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 30000; //30秒内请求时间，超过cancel请求
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    console.log("参数错误，请确保传输数据为严格格式的json对象！");
    return Promise.reject(error);
});

export function fetch(type, url, params) {
    return new Promise((resolve, reject) => {
        axios({
            method: type,
            url: url,
            params: params
        })
        .then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        })
        .catch((error) => {
           reject(error)
        })
    })
}

export function fetchAll(arr) {
    return new Promise((resolve, reject) => {
        console.log(...arr);
        axios.all(...arr)
        .then(axios.spread(function (acct, perms) {
            // 两个请求现在都执行完成
        }));
    })
}

export default {
    /**
     * 抓取首页热点
     */
    Push(type, url, params) {
        return fetch(type, url, params)
    },

    PushAll(arr) {
        return fetchAll(arr);
    }
}
