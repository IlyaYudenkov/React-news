import './styles/App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsList from './components/NewsList/NewsList';
import NewsPage from './components/NewsPage/NewsPage';

function App() {
  const [posts, setPosts] = useState([]);
  const src = 'https://jsonplaceholder.typicode.com/posts'
  useEffect(() => {
    axios
      .get(src)
      .then(data => setPosts(data.data))
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<NewsList posts={posts} />} />
          {posts.map(post => {
            return <Route path={`post${post.id}`} element={
              <NewsPage
                title={post.title}
                text={post.body}
                id={post.id}
                key={post.id}
              />}
            />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
