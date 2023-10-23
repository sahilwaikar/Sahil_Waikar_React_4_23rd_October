import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


const SingleElement = () => {

    const [post, setPost] = useState();
    const [isLoading, setIsLoading] = useState(true);

    let params = useParams(); //{userId:'5'}

    console.log(params);

    useEffect(async () => {
        let apiResponse = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id);
        apiResponse = await apiResponse.json();
        setPost(apiResponse);
        setIsLoading(false);
    }, [])

    return isLoading ?
        (
            <div>User detail loading...</div>
        ) :
        (
            //Optional chaining.
            <div className='Post-detail-page'>
                <div className='inner-post'>
                    <img src='https://picsum.photos/200?random=${post.id}](https://picsum.photos/200?random=$%7Bpost.id%7D' className='user-detail-img' />

                    <p>ID: {post?.id}</p>
                    <h4>Title: {post?.title}</h4>
                    <h4>Post: {post?.body}</h4>
                    <a href='/'>Go back</a>
                </div>
            </div>
        )
}

export default SingleElement