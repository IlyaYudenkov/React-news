import styles from './NewsComments.module.scss';
import Comment from '../Comment/Comment';
import useSWR from 'swr';
import { fetcher } from '../../helpers/fetcher';
import Loader from '../../helpers/Loader';
import React, { FC } from 'react';

interface NewsCommentsProps {
    postId: string;
}

interface IComments {
    postId: number;
    id: number;
    body: string;
    email: string;
    name: string;
}


const NewsComments: FC<NewsCommentsProps> = ({ postId }) => {

    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

    const { data: comments, error, isLoading } = useSWR<IComments[]>(url, fetcher);

    if (error) return <div>Ошибка загрузки</div>;

    if (isLoading) return (
      <div style={{borderTop:'1px solid #000'}}>
        <Loader display='none' />
      </div>
    );
    return (

      <div className={styles.news__comments}
            style={{ display: 'block' }}>
        {comments ? comments.map(comment =>
          <Comment userName={comment.name} email={comment.email} text={comment.body} key={comment.id} />
            ) : 'No avaliable data'}
      </div>
    );
};
export default NewsComments;