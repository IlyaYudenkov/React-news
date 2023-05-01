import { IComment} from '../../types/types';
import styles from './Comment.module.scss'
import React, { FC } from "react";


const Comment:FC <IComment> = ({ userName, email, text }) => {

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