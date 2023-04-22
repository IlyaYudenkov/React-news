import style from './NewsList.module.scss';
import NewsPost from "../NewsPost/NewsPost";


const NewsList = ({ posts }) => {

    return (
        <div>
            <h1>Новости</h1>
            {posts.map(post => {
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