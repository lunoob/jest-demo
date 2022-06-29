function timerGame (callback: () => void) {
    setTimeout(() => {
        callback && callback()
    }, 1000)
}

function infiniteTimerGame (callback: () => void) {
    setTimeout(() => {
        callback && callback()

        // Schedule the next game in 10 seconds
        setTimeout(() => {
            callback && callback()
        }, 10000)
    }, 1000)
}

export {
    timerGame,
    infiniteTimerGame
}
