import React from "react";

const NewsPost = ({}) => {

 return (
    <div className="news">
        <div className="news__title">title</div>
        <div className="news__text">text</div>
        <div className="news__info">
            <div className="info__date">11/04/2023</div>
            <div className="info__button">
                <a href="">Читать</a>
            </div>
        </div>
    </div>
 );
}
export default NewsPost;