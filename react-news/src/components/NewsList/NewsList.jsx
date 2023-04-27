import style from './NewsList.module.scss';
import NewsPost from "../NewsPost/NewsPost";
import useSWR from 'swr';
import axios from 'axios';


const NewsList = () => {

    const src = 'https://jsonplaceholder.typicode.com/posts';

    const fetcher = src => axios.get(src).then(res => res.data)

    const { data, error, isLoading } = useSWR(src, fetcher)


    if (error) return <h1 style={{textAlign:'center'}}>Ошибка загрузки</h1>
    if (isLoading) return (
        <div>
            <h1>Новости</h1>
            <div>Loading...</div>
        </div>
    )

    return (
        <div>
            <h1 className={style.h1}>Новости</h1>
            {data.map(post => {
                return (
                    <NewsPost
                        title={post.title}
                        text={post.body}
                        path={post.id}
                        id={post.id}
                        key={post.id} />
                )
            })}
        </div>
    );
}
export default NewsList;