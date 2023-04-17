import React from "react";
import './NewsPage.css';
import {Link} from "react-router-dom";

const NewsPage = ({post}) => {
   
    return (
        <div className="tidings">
            <div className="tidings__title">{post.title}</div>
            <div className="tidings__text">{post.text}</div>
            <div className="tidings__info">
                <div className="info__date">{post.date}</div>
                <div className="info__button">
                    <Link to = '/'>Назад</Link>
                </div>
            </div>
        </div>
    );
}
export default NewsPage;