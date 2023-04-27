import axios from 'axios';
import styles from './NewsComments.module.scss'
import Comment from './Comment/Comment';
import useSWR from 'swr';

const NewsComments = ({ postId }) => {


    const srcComments = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

    const fetcher = srcComments => axios.get(srcComments).then(res => res.data)

    const { data, error } = useSWR(srcComments, fetcher)

    if (error) return <div>Ошибка загрузки</div>

    return (

        <div className={styles.news__comments}
            style={{ display: 'block' }}>
            {data ? data.map(comment =>
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