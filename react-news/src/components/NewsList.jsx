import React from "react";
import NewsPost from "./NewsPost";

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