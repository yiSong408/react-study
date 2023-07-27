import React from 'react';
// 类名样式
import './StyleControl.css'
// 行内样式
const style = {
    color: 'red', fontSize: '30px'
}
// 动态控制类名
const activeFlag = true

function StyleControl(props) {
    return (
        <div>
            <span style={style}>span</span>
            <span className={activeFlag ? 'active' : ''}>classname test</span>
        </div>
    );
}

export default StyleControl;
