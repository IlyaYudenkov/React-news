import style from './NewsPage.module.scss';
import styles from '../NewsPost/NewsPost.module.scss';
import { Link } from "react-router-dom";

const NewsPage = ({ title, text, id }) => {
    return (
        <div className={style.news}>
            <div className={styles.news__title}>{title}</div>
            <div className={styles.news__text}>{text}</div>
            <div className={styles.news__info}>
                <div className={styles.info__date}>{id}</div>
                <div className={styles.info__button}>
                    <Link to='/'>Назад</Link>
                </div>
            </div>
        </div>
    );
}
export default NewsPage;