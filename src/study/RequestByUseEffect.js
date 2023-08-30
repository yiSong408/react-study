import React, {useEffect} from 'react';
import {logDOM} from "@testing-library/react";

function RequestByUseEffect(props) {
    useEffect(()=>{
        async function loadData(){
            const res = await fetch('').then(
                res=>res.json()
            ).then(data=>console.log(data))
            console.log(res)
        }
        loadData()
    },[])
    return (
        <div></div>
    );
}

export default RequestByUseEffect;
