import React, {useEffect, useState} from 'react';

function UseLocalStorage(key,defaultValue) {
    let [message,setMessage] = useState(defaultValue);
    // 数据变化，自动同步到local storage
    useEffect(()=>{
        window.localStorage.setItem(key,message)
    },[key,message])
    return [message,setMessage];
}

export default UseLocalStorage;
