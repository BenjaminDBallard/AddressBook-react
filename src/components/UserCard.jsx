import {useState, useEffect} from 'react'
import ToggleVisibility from './ToggleVisibility';
import HiddenCard from './HiddenCard';

export default function UserCard({data}) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        let posts = data.results.map(p => p)
        setPosts(posts)
    }, []);

    
    return(
        posts.map((post, index) => {
            return(
                <div className='card' key={index}>
                    <img className='photo' src={post.picture.thumbnail} alt="thumbnail" />
                    <ul>
                        <li>{post.name.first} {post.name.last}</li>
                    </ul>
                    <ToggleVisibility>
                        <HiddenCard picture={post.picture.large} first_name={post.name.first} last_name={post.name.last} birthday={post.dob.date} phone={post.phone} country={post.location.country}/>
                    </ToggleVisibility>
                </div>
            )
        })
    )
}


