import styles from './NewsPost.module.scss';
import { Link } from 'react-router-dom';
import React, { FC } from 'react';
import { IPost } from '../../types/types';



const NewsPost: FC<IPost> = ({ title, body, id }) => {

    return (
      <div className={styles.news}>
        <div className={styles.news__title}>{title}</div>
        <div className={styles.news__text}>{body.substring(0, 100) + '...'}</div>
        <div className={styles.news__info}>
          <div className={styles.info__date}>{id}</div>
          <div className={styles.info__button}>
            <Link to={`view/${id}`}>Читать</Link>
          </div>
        </div>
      </div>
    );
};
export default NewsPost;