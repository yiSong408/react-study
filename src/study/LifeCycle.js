import React from 'react';

class Test extends React.Component {
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        return <div>test</div>
    }
}

class LifeCycle extends React.Component {
    state = {
        count: 0,
        flag: true
    }

    constructor() {
        super();
        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    clickHandler = () => {
        this.setState({
            count: this.state.count + 1,
            flag:!this.state.flag
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    render() {
        console.log('render')
        return <div>
            {this.state.flag ? <Test/> : null}
            <div>{this.state.count}</div>
            <button onClick={this.clickHandler}>click</button>
        </div>
    }
}

export default LifeCycle;
