import React from 'react';

//函数组件
function Hello(){
    return <div>hello</div>
}
//类组件
class HelloComponent extends React.Component{
    render() {
        return <div>class component</div>
    }
}
function FunctionComponent(props) {
    return (
        <div>
            <Hello />
            <HelloComponent />
        </div>
    );
}

export default FunctionComponent;
