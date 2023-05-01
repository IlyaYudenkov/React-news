import stls from './NewsPage.module.scss';
import styles from '../NewsPost/NewsPost.module.scss';
import { Link, useParams } from "react-router-dom";
import { useState } from 'react';
import { fetcher } from '../../helpers/fetcher'
import NewsComments from '../NewsComments/NewsComments'
import useSWR from 'swr';
import Loader from '../../helpers/Loader';
import React from 'react';
import { IPost } from '../../types/types';

const NewsPage = () => {

    const { postId } = useParams();

    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    const [showComments, setShowComments] = useState(false)

    const { data: post, error, isLoading } = useSWR<IPost>(url, fetcher)


    if (error) return <h1 style={{ textAlign: 'center' }}>Ошибка загрузки</h1>
    if (isLoading) return (
        <div>
            <Loader text='Новость'/>
        </div>
    )
    return (
        <div>
            <h1>Новость</h1>
            <div className={stls.news}>
                <div className={styles.news__title}>{post.title}</div>
                <div className={styles.news__text}>{post.text}</div>

                {showComments && <NewsComments postId={`${postId}`} />}

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