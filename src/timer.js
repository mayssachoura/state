import React, {Component } from 'react';


class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    componentDidMount() {
        this.countInterval = setInterval(() => this.tick(), 300)
    }

    tick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentWillUnmount() {
        clearInterval(this.countInterval)
    }

    render() {
        const { count } = this.state
        console.log('[Counter] - [render] : ', count)
        return <div style={{ fontWeight: 'bold', fontSize: 30 }}>The time interval since the last component was mounted : {count}</div>
    }
}

export default Timer;