import React, {useEffect, useState} from 'react';

// useState 无法在class中执行，只能写在外层
// 1.useState传过来的参数，作为count初始值
// 2.[count, setCount]解构赋值，名字可以自定义

function Counter(props) {
    let [count, setCount] = useState(()=>{
        // 这里为了体现计算，需要经过一定操作才能获取
        return props.count
    });
    return (
        <button onClick={() => setCount(count + 1)}>{count}</button>
    )
}

function HookUse(props) {
    let [count, setCount] = useState(0);
    let [flag, setFlag] = useState(true);
    let [list, setList] = useState([]);

    useEffect(() => {
        // 定义副作用
        // 添加空数组时，只会在初始化时执行一次
        // 只监听数组中添加的属性
        console.log('副作用执行')
        document.title = 1
    }, [])


    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <Counter count={10}/>
            <Counter count={20}/>
        </div>
    );
}

export default HookUse;
