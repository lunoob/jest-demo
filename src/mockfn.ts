import axios from 'axios'

export function callbackFn (callback: () => any) {
    callback()
}

export function createObj (ClassItem: any) {
    return new ClassItem()
}

export function fetchData () {
    return axios.get('/api').then(res => res.data)
}
