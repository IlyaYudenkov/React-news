import styles from './NewsComments.module.scss'
import Comment from '../Comment/Comment';
import useSWR from 'swr';
import  {fetcher}  from '../../helpers/fetcher';
import Loader from '../../helpers/Loader';
import React, { FC } from "react";

interface NewsCommentsProps{
    postId: String;
}

interface Comments{
    comment: object;
}
interface Comment{
    Comments: Comment[]
}


const NewsComments:FC<NewsCommentsProps> = ({ postId }) => {

    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

    const { data: comments, error } = useSWR<Comments, Error>(url, fetcher)

    if (error) return <div>Ошибка загрузки</div>

    return (

        <div className={styles.news__comments}
            style={{ display: 'block' }}>
            {comments ? comments.map(comment) =>
                <Comment
                    userName={comment.name}
                    email={comment.email}
                    text={comment.body}
                    key={comment.id}
                />)
                : <Loader display={'none'}/>}
        </div>
    );
}
export default NewsComments;