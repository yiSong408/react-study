import React from 'react';

class InputComponent extends React.Component{
    state={
        message:'this is message'
    }
    inputChange=(event)=>{
        console.log('changed event',event)
        this.setState({
            message:event.target.value
        })

    }
    render() {
        return <div>
            <input type={'text'} value={this.state.message} onChange={this.inputChange}/>
        </div>
    }
}


function ControlledComponent(props) {
    return (
        <div>
            <InputComponent />
        </div>
    );
}

export default ControlledComponent;