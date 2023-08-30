import React, {createContext, useContext, useState} from 'react';

const Context = createContext();

function ComA() {
    let count = useContext(Context);
    return (
        <div>this is a
            <br />
            from app: {count}
            <ComC/>
        </div>
    )
}

function ComC() {
    let count = useContext(Context);

    return (
        <div>this is c
            <br />
            from app: {count}
        </div>
    )
}


function UseContext(props) {
    let [count,setCount] = useState(20);
    return (
        <Context.Provider value={count}>
            <div>
                <ComA />
                <button onClick={()=>{setCount(count+1)}}>+</button>
            </div>
        </Context.Provider>

    );
}

export default UseContext;
