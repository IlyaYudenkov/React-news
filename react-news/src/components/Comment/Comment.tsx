import styles from './Comment.module.scss';
import React, { FC } from "react";

 interface CommentProps{
    userName: string;
    email:string;
    text: string;
}
const Comment:FC <CommentProps> = ({ userName, email, text }) => {

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