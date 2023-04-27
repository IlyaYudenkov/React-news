import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './NewsComments.module.scss'
import Comment from './Comment/Comment';

const NewsComments = ({ postId }) => {

    const [comments, setComments] = useState([]);

    const srcComments = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

    useEffect(() => {
        axios
            .get(srcComments)
            .then(res => setComments(res.data))
    }, [srcComments])



    return (

        <div className={styles.news__comments}
            style={{ display: 'block' }}>
            {comments.length ? comments.map(comment =>
                <Comment
                    userName={comment.name}
                    email={comment.email}
                    text={comment.body}
                    key={comment.id}
                />)
                : 'Loading...'}
        </div>
    );
}
export default NewsComments;