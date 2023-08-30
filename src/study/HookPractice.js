import React from 'react';
import useWindowScroll from "./hooks/useWindowScroll";
import useLocalStorage from "./hooks/useLocalStorage";

function HookPractice(props) {
    let [y] = useWindowScroll();
    let [message,setMessage] = useLocalStorage('hook-key','coffee');
    setTimeout(()=>{
        setMessage('cp')
    },5000)
    return (
        <div style={{height:'120000px'}}>
            {y}
            {message}
        </div>
    );
}

export default HookPractice;
