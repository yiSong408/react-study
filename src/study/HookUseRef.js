import React, {useEffect, useRef} from 'react';
class TestC extends React.Component{
    getName=()=>{
        return 'get name'
    }
    render() {
        return (
            <div>class component</div>
        )
    }
}
function HookUseRef(props) {
    let comRef = useRef(null);
    let h1Ref = useRef(null);

    useEffect(()=>{
        console.log(comRef.current)
        console.log(h1Ref.current)
    },[])
    // useEffect回调，在渲染之后
    // 和vue里的watch像，执行时机不同
    return (
        <div>
            <TestC ref={comRef}/>
            <h1 ref={h1Ref}>this is h1</h1>
        </div>
    );
}

export default HookUseRef;