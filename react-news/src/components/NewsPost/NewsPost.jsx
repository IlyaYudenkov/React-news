import styles from './NewsPost.module.scss';
import { Link } from "react-router-dom";

const NewsPost = ({ title, text, path, id }) => {

    return (
        <div className={styles.news}>
            <div className={styles.news__title}>{title}</div>
            <div className={styles.news__text}>{text.substring(100) + '...'}</div>
            <div className={styles.news__info}>
                <div className={styles.info__date}>{id}</div>
                <div className={styles.info__button}>
                    <Link to={`post${path}`}>Читать</Link>
                </div>
            </div>
        </div>
    );
}
export default NewsPost;