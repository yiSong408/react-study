import React from 'react';

const name = 'jack'
const age = () => {
    return 18
}
const flag = true

function One(props) {
    return (
        <div>
            <p>{name}</p>
            <p>{age()}</p>
            <p>{flag ? 'good' : 'bad'}</p>
        </div>
    );
}

export default One;
