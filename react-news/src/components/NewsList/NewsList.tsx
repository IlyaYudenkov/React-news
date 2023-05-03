import style from './NewsList.module.scss';
import NewsPost from '../NewsPost/NewsPost';
import useSWR from 'swr';
import { fetcher } from '../../helpers/fetcher';
import Loader from '../../helpers/Loader';
import React, { FC } from 'react';


interface IPosts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const NewsList: FC = () => {

    const url = 'https://jsonplaceholder.typicode.com/posts';

    const { data: posts, error, isLoading } = useSWR<IPosts[]>(url, fetcher);

    if (error) return <h1 style={{ textAlign: 'center' }}>Ошибка загрузки</h1>;

    if (isLoading) return (
        <div>
            <Loader text='Новости' />
        </div>
    );

    return (
        <div>
            <h1 className={style.h1}>Новости</h1>
            {posts!.map(post => {
                return (
                    <NewsPost
                        title={post.title}
                        body={post.body}
                        path={post.id}
                        id={post.id}
                        key={post.id}
                    />

                );
            })}
        </div>
    );
};
export default NewsList;