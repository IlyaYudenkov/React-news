import React from "react";
import './NewsPost.css';
import {Link} from "react-router-dom";

const NewsPost = ({post}) => {
    
 return (
    <div className="news">
        <div className="news__title">{post.title}</div>
        <div className="news__text">{post.text}</div>
        <div className="news__info">
            <div className="info__date">{post.date}</div>
            <div className="info__button">
                <Link to = {`${post.path}%`}>Читать</Link>
            </div>
        </div>
    </div>
    
 );
 
}
export default NewsPost;