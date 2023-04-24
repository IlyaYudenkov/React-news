import style from './NewsList.module.scss';
import NewsPost from "../NewsPost/NewsPost";
import { useEffect, useState } from 'react';
import axios from 'axios';


const NewsList = () => {
    const [posts, setPosts] = useState([]);

    const src = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        axios
            .get(src)
            .then(res => setPosts(res.data))
    }, [])

    if (!posts.length) {
        return (
            <div>
                <h1>Новости</h1>
                <div>Loading...</div>
            </div>
        )
    }
    return (
        <div>
            <h1>Новости</h1>
            {posts.map(post => {
                return (
                    <NewsPost
                        title={post.title}
                        text={post.body}
                        path={post.id}
                        id={post.id}
                        key={post.id} />
                )
            })}
        </div>
    );
}
export default NewsList;