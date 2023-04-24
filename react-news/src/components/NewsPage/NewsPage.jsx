import stls from './NewsPage.module.scss';
import styles from '../NewsPost/NewsPost.module.scss';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

const NewsPage = () => {

    const { postId } = useParams();

    const [post, setPost] = useState({});

    const [comments, setComments] = useState([]);

    const src = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    const srcComments = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;


    useEffect(() => {
        axios
            .get(src)
            .then(res => setPost(res.data))
    }, [src])

    useEffect(() => {
        axios
            .get(srcComments)
            .then(res => setComments(res.data))
    }, [srcComments])

    if (!post.id) {
        return (
            <div>
                <h1>Новость</h1>
                <div>Loading...</div>
            </div>
        )
    }

    const showComments = () => {
        let news = document.querySelector('.NewsPage_news__KzJaX');
        let comments = document.querySelector('.NewsPage_news__comments__a25Uh');
        let commentsButton = document.querySelector('.NewsPage_info__comments__Qcgo3');
        if (news.dataset.trigger == 'false') {
            news.style.gridTemplateRows = '80px 1fr 1fr';
            comments.style.display = 'block';
            news.dataset.trigger = 'true';
            commentsButton.innerHTML = 'Скрыть комментарии'
        }
        else {
            news.style.gridTemplateRows = '80px 1fr';
            comments.style.display = 'none';
            news.dataset.trigger = 'false';
            commentsButton.innerHTML = 'Показать комментарии'
        }
    }

    return (
        <div className={stls.news} data-trigger='false'>
            <div className={styles.news__title}>{post.title}</div>
            <div className={styles.news__text}>{post.body}</div>
            <div className={stls.news__comments}>{comments.map(comment => {
                return (
                    <div className={stls.comments__comment}>
                        <div>
                            Username: {comment.name}
                        </div>
                        <div>
                            Email:  {comment.email}
                        </div>
                        <div>
                            Comment:   {comment.body}
                        </div>
                    </div>

                )
            })}</div>
            <div className={styles.news__info}>
                <div className={styles.info__date}>{post.id}</div>
                <div className={styles.info__button} >
                    <Link to='/'>Назад</Link>
                </div>
                <button onClick={showComments} className={stls.info__comments}>
                    Показать комментарии
                </button>
            </div>
        </div>
    );
}
export default NewsPage;