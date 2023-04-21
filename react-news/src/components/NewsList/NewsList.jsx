import style from './NewsList.module.scss';
import NewsPost from "../NewsPost/NewsPost";

const NewsList = ({ posts }) => {

    return (
        <div>
            <h1>Новости</h1>
            {posts.map(post =>
                <NewsPost
                    title={post.title}
                    text={post.text}
                    date={post.date}
                    path={post.path}
                    key={post.id} />
            )}
        </div>
    );
}
export default NewsList;