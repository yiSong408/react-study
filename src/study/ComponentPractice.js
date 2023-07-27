import React, {useState} from 'react';

function ListenItem({item, delItem}) {
    return (
        <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.age}</p>
            <p>{item.info}</p>
            <button onClick={() => delItem(item.id)}>delete</button>
        </div>
    )
}


class ComponentPractice extends React.Component {
    state =
        {
            list: [
                {id: 1, name: 'jack', age: 18, info: 'good'},
                {id: 2, name: 'rose', age: 18, info: 'good'},
                {id: 3, name: 'mike', age: 18, info: 'good'},
                {id: 4, name: 'lili', age: 18, info: 'good'}
            ]
        }

    delItem = (id) => {
        this.setState({
            list: this.state.list.filter(item => item.id !== id)
        })

    }

    render() {
        return (
            <div>
                {this.state.list.map(item => (
                    <ListenItem item={item} delItem={this.delItem}/>
                ))}
            </div>
        );
    }


}

export default ComponentPractice;
