class Counter {
    private value = 0

    public addOne () {
        this.value += 1
    }

    public minusOne () {
        this.value -= 1
    }

    public addTwo () {
        this.value += 2
    }

    public minusTwo () {
        this.value -= 2
    }

    public getValue () {
        return this.value
    }
}

export default Counter
