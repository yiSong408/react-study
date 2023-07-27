import React, {createRef} from 'react';

class InputComponent extends React.Component{
    msgRef = createRef()
    getValue=()=>{
        console.log(this.msgRef)
        console.log(this.msgRef.current.value)
    }
    render() {
        return <div>
            <input type={'text'} ref={this.msgRef}/>
            <button onClick={this.getValue}>click to get</button>
        </div>
    }
}

function UncontrolledComponent(props) {
    return (
        <div>
            <InputComponent />
        </div>
    );
}

export default UncontrolledComponent;
