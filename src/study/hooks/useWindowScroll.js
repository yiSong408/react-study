import React, {useState} from 'react';

function UseWindowScroll(props) {
    let [y,setY] = useState(0);
    // 在滚动行为发生时，不断获取滚动值然后交给y
    window.addEventListener('scroll',()=>{
        let h = document.documentElement.scrollTop;
        setY(h)
    })
    return [y]
}

export default UseWindowScroll;