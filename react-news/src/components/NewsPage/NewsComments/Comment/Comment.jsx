import styles from './Comment.module.scss'
const Comment = ({ userName, email, text }) => {

    return (
        <div className={styles.comments__comment}>
            <div >
                Username: <span>{userName}</span>
            </div>
            <div>
                Email:  <span>{email}</span>
            </div>
            <div>
                Comment:  <span>{text}</span>
            </div>
        </div>
    );
}
export default Comment;