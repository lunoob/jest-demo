export function generateConfig () {
    return {
        domain: 'localhost',
        post: 8080,
        count: 8,
        time: '2022-06-19 23:05:50'
    }
}

export function generateAnotherConfig () {
    return {
        domain: 'localhost',
        post: 8080,
        count: 8,
        time: new Date()
    }
}
