import { useEffect, useState } from 'react'
import './PublicPost.css'
import Post from '../Post/Post';
export default function PublicPost(){

    const [posts , setPosts] = useState([]);


    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then( data => setPosts(data))
    },[])

    return(
        <div className='postBy'>
            <h3>posts.length </h3>
            {
                posts.map( post => <Post
                  post = {post}
                ></Post>)
            }
        </div>
    )
}