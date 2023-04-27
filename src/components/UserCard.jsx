import React from 'react'

export default function UserCard({data}) {
    
    return(
       data.map((user, index) => {

        return(
            <div className='card' key={index}>
                <img className='photo' src={user.picture.thumbnail} alt="thumbnail" />
                <ul>
                    <li>{user.name.first} {user.name.last}</li>
                </ul>
                <button>More Info</button>
            </div>
        )
       })
    )
}


