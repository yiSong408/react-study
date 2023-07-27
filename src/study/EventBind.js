import React from 'react';

function Hello() {
    const clickHandler = (e) => {
        console.log('function aaa')
        console.log(e)
    }
    return <div onClick={clickHandler}>hello</div>
}

// 传递参数
// 1.只需要一个额外的参数
// 2.既需要e也需要额外的参数
function Hello2() {
    const clickHandler = (e) => {
        e.preventDefault()
        console.log('function aaa',e)
    }
    return <div onClick={clickHandler}><a href={'http://baidu.com'}>baidu</a></div>
}
function Hello3() {
    const clickHandler = (e,msg) => {
        console.log('function aaa',msg)
    }
    return <div onClick={(e)=>clickHandler(e,'this is msg')}>hello3</div>
}

class HelloComponent extends React.Component{
    clickHandler=()=>{
        console.log('class aaa')
    }
    render() {
        return <div onClick={this.clickHandler}>class component</div>
    }
}
function EventBind(props) {
    return (
        <div>
            <Hello />
            <HelloComponent />
            <Hello2 />
            <Hello3 />
        </div>
    );
}

export default EventBind;
