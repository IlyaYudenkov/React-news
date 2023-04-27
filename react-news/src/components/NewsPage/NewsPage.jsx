import stls from './NewsPage.module.scss';
import styles from '../NewsPost/NewsPost.module.scss';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsComments from './NewsComments/NewsComments';


const NewsPage = () => {

    const { postId } = useParams();

    const [post, setPost] = useState({});

    const [showComments, setShowComments] = useState(false)

    const src = `https://jsonplaceholder.typicode.com/posts/${postId}`;


    useEffect(() => {
        axios
            .get(src)
            .then(res => setPost(res.data))
    }, [src])


    if (!post.id) {
        return (
            <div>
                <h1>Новость</h1>
                <div>Loading...</div>
            </div>
        )
    }

    return (
        <div>
            <h1>Новость</h1>
            <div className={stls.news}>
                <div className={styles.news__title}>{post.title}</div>
                <div className={styles.news__text}>{post.body}</div>

                {showComments && <NewsComments postId={postId} />}

                <div className={styles.news__info}>
                    <div className={styles.info__date}>{post.id}</div>
                    <div className={styles.info__button} >
                        <Link to='/'>Назад</Link>
                    </div>

                    <button onClick={() => setShowComments(!showComments)} className={stls.info__comments} >
                        {showComments ? 'Скрыть комментарии' : 'Показать комментарии'}
                    </button>

                </div>
            </div>
        </div>

    );
}
export default NewsPage;