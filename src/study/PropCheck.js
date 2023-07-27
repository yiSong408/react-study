import React from 'react';
import PropTypes from 'prop-types'
// props默认值 1.使用defaultProps 2.函数参数默认值（推荐）
// 类组件默认值 1.defaultProps 2.static类静态属性定义
function Test({list,pageSize=10}) {
    return (
        <div>
            {list.map(item => <p>{item}</p>)}
            {pageSize}
        </div>
    )
}

Test.propTypes = {
    // 定义规则
    list: PropTypes.array
}


function PropCheck(props) {

    return (
        <div>
            <Test list={[1, 2, 3]}/>
        </div>
    );
}

export default PropCheck;
