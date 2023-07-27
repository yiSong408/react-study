import React from 'react';

const songs = [
    {id: 1, name: 'jack'},
    {id: 2, name: 'rose'},
    {id: 3, name: 'mike'},
]

function ListRender(props) {
    return (
        <div>
            <ul>
                {songs.map(song=>{
                    return <li key={song.id}>{song.name}</li>
                })}
            </ul>
        </div>
    );
}

export default ListRender;
