import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { addPost } from "../redux/postSlice";
import { useDispatch } from "react-redux";

let Home = () => {
    const postData = useSelector((state) => state.post);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("Inside Users useEffect")
        if (postData.length == 0) {
            callApi();
        } else {
            setIsLoading(false);
        }
    }, [])
    let callApi = async () => {
        //fetch is used to make api calls.
        let res = await fetch('https://jsonplaceholder.typicode.com/posts');
        let jsonResponse = await res.json();
        // console.log(jsonResponse);
        //Adding custom delay
        setTimeout(() => {
            dispatch(addPost(jsonResponse));
            setIsLoading(false);
        }, 2000)
    }
    console.log(postData[0]);
    return isLoading ?
        (<div>
            <h4>Loading user data...</h4>
        </div>)
        :
        (
            <div className="container">
                <h2 style={{ textAlign: 'center', color:"white"}}>Posts</h2>
                <div className="posts-container">
                    {
                        postData.map((posts) => {
                            return (
                                <div className="post-card">
                                    <Link className="post-link" to={"/posts/" + posts.id}>
                                        <img src="https://picsum.photos/200?random=${post.id}](https://picsum.photos/200?random=$%7Bpost.id%7D"></img>
                                        <p className="post_title">Title: {posts.title}<span className="show">...</span></p>
                                        <p className="post_body">Body: {posts.body}</p><span className="show">read more...</span>
                                    </Link>
                                </div>

                            )

                        })

                    }
                </div>
            </div>

        )
}

export default Home;