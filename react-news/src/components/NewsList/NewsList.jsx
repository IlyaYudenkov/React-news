import React from "react";
import './NewsList.css';
import NewsPost from "../NewsPost/NewsPost";

const NewsList = ({posts}) => {
    
 return (
    <div>
        <h1>Новости</h1>
        {posts.map(post => 
            <NewsPost post = {post}/>
        )}
    </div>
    
 );
}
export default NewsList;