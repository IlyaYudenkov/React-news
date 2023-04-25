import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './NewsComments.module.scss'
import Comment from './Comment/Comment';

const NewsComments = ({showComments, postId}) => {

    const [comments, setComments] = useState([]);

    const srcComments = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

    useEffect(() => {
        axios
            .get(srcComments)
            .then(res => setComments(res.data))
    }, [srcComments])



 return (
    <div className={styles.news__comments} 
                style={showComments ? {display:'block'} : null}>
                {comments.map(comment => {
                    return showComments && <Comment
                        userName={comment.name}
                        email={comment.email}
                        text={comment.body}
                        key={comment.id}
                    />
                })}
                </div>
 );
}
export default NewsComments;