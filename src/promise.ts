import axios from 'axios'

export function fetchData (cb: any) {
    return axios.get('http://baidu.com').then(result => result.data)
    // return axios.get('http://localhost:3000').then(result => result.data)
}

export function fetchDataCb (cb: any) {
    setTimeout(() => {
        cb('', 'peanut butter')
    }, 2000)
}
