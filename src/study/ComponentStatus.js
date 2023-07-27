import React from 'react';

class TestComponent extends React.Component {
    // 1 定义组建状态
    state = {
        // 这里可以定义各种属性，都是当前组件的状态
        name: 'cp teacher',
        count: 0,
        list:[1,2,3,4],
        obj:{
            name:'jack',
            age:18
        }
    }
    // 事件回调函数
    changeName = () => {
        //无法直接修改属性，要用useState
        this.setState({
            name: 'jack'
        })
    }
    changeCount = () => {
        this.setState({
            count : this.state.count+1
        })
    }

    changeList=()=>{
        this.setState({
            list:[...this.state.list,5,6]
        })
    }

    delList=()=>{
        this.setState({
            list:this.state.list.filter(item=>item!==2)
        })
    }

    changeObj=()=>{
        this.setState({
            obj:{...this.state.obj,name:'rose'}
        })
    }

    render() {
        // 2 使用状态
        return (<div>
            this is a test component
            the name is : {this.state.name}
            <button onClick={this.changeName}>edit</button>
            <button onClick={this.changeCount}>{this.state.count}add</button>
            <br />
            <ul>
                {this.state.list.map((item)=>{
                    return <li key={item}>{item}</li>
                })}
            </ul>
            <button onClick={this.changeList}>add list</button>
            <button onClick={this.delList}>delete list</button>
            <br />
            <div>{this.state.obj.name}</div>
            <button onClick={this.changeObj}>edit obj</button>
        </div>)
    }
}

function ComponentStatus(props) {
    return (
        <div>
            <TestComponent/>
        </div>
    );
}

export default ComponentStatus;