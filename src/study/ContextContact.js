import React,{createContext} from 'react';
// 导入context提供消费者和提供者
const {Provider,Consumer} = createContext(String)
function ComponentA(){
    return (
        <div>
            <ComponentB />
        </div>
    )
}

function ComponentB(){
    return (
        <div>
            this is grandson
            <Consumer>
                {value => <span>{value}</span>}
            </Consumer>
        </div>
    )
}

class ContextContact extends React.Component{
    state={
        message:'from father'
    }
    render() {
        return <Provider value={this.state.message}>
            <div>
                <ComponentA/>
            </div>
        </Provider>
    }


}

export default ContextContact;
