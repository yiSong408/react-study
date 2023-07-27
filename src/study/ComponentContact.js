import React from 'react';

class Father extends React.Component {
    state = {
        message: 'this is message',
        list: [1, 2, 3, 4]
    }
    // 子传夫的函数
    getSonMsg = (msg) => {
        console.log(msg)
    }
    getMessage = () => {
        console.log('from father component')
    }

    render() {
        return <div>
                <SonC msg={this.state.message} list={this.state.list} getMessage={this.getMessage}/>
                <SonF msg={this.state.message} list={this.state.list}
                      getMessage={this.getMessage}
                      getSonMsg={this.getSonMsg}
                      child={<span>span from father</span>}/>
            </div>

    }
}

function SonF(props) {
    console.log(props)
    const {getSonMsg} = props
    return (
        <div>
            function component,{props.msg}
            {props.list.map(item =>
                <p key={item}>{item}</p>)}
            <button onClick={props.getMessage}>click</button>
            {props.child}
            <button onClick={() => getSonMsg('data from child')}>get from child</button>
            <hr/>
        </div>
    )
}
class SonC extends React.Component {
    render() {
        return <div>class component,{this.props.msg}</div>

    }
}

function ComponentContact(props) {
    return (
        <div>
            <Father/>
        </div>
    );
}

export default ComponentContact;
