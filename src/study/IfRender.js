import React from 'react';
// 条件渲染：三元表达式；逻辑&&运算

const flag = true
// 1-> h1;2-> h2;3-> h3
const getTag = (type) => {
    if (type == 1) {
        return <h1>h1</h1>
    }
    if (type == 2) {
        return <h2>h2</h2>
    }
    if (type == 3) {
        return <h3>h3</h3>
    }
}

function IfRender(props) {
    return (
        <div>
            {flag ? (
                    <div>
                        <span>span</span>
                    </div>
                ) :
                null}
            {flag && <span>span2</span>}
            {getTag(1)}
        </div>
    );
}

export default IfRender;