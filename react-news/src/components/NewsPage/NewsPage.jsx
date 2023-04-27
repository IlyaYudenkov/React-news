import stls from './NewsPage.module.scss';
import styles from '../NewsPost/NewsPost.module.scss';
import { Link, useParams } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import NewsComments from './NewsComments/NewsComments';
import useSWR from 'swr';



const NewsPage = () => {

    const { postId } = useParams();

    const srcPage = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    const fetcher = srcPage => axios.get(srcPage).then(res => res.data)

    const [showComments, setShowComments] = useState(false)

    const { data, error, isLoading } = useSWR(srcPage, fetcher)


    if (error) return <h1 style={{textAlign:'center'}}>Ошибка загрузки</h1>
    if (isLoading) return (
        <div>
            <h1>Новость</h1>
            <div>Loading...</div>
        </div>
    )
    return (
        <div>
            <h1>Новость</h1>
            <div className={stls.news}>
                <div className={styles.news__title}>{data.title}</div>
                <div className={styles.news__text}>{data.body}</div>

                {showComments && <NewsComments postId={postId} />}

                <div className={styles.news__info}>
                    <div className={styles.info__date}>{data.id}</div>
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