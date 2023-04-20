import React from "react";
import './NewsPage.css';
import {Link} from "react-router-dom";

const NewsPage = ({posts, fullText}) => {
    return (
        <div className="news-1">
            <div className="news__title">{posts.title}</div>
            <div className="news__text">{fullText}</div>
            <div className="news__info">
                <div className="info__date">{posts.date}</div>
                <div className="info__button">
                    <Link to = '/'>Назад</Link>
                </div>
            </div>
        </div>
    );
}
export default NewsPage;