import './styles/App.css'
import { useState } from 'react';
import NewsList from './components/NewsList/NewsList';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import NewsPage from './components/NewsPage/NewsPage';



function App() {
  const [posts, setPosts] = useState([
    { id: Date.now(), date: '11.04.2023', title: 'Title', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis animi facere provident quasi id ipsa adipisci officiis, explicabo velit alias quidem illo labore eligendi nostrum officia sunt aperiam. Numquam quam suscipit, minus veniam itaque eligendi nostrum dolore cupiditate quisquam reiciendis voluptatum nam atque maxime aliquam expedita quod a provident illo, odit, illum porro error facere! Odio cum sed fugiat, quia voluptatem incidunt repudiandae nobis eveniet aliquid consectetur.', path: '/post1' },
    { id: Date.now(), date: '12.04.2023', title: 'Title', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis animi facere provident quasi id ipsa adipisci officiis, explicabo velit alias quidem illo labore eligendi nostrum officia sunt aperiam. Numquam quam suscipit, minus veniam itaque eligendi nostrum dolore cupiditate quisquam reiciendis voluptatum nam atque maxime aliquam expedita quod a provident illo, odit, illum porro error facere! Odio cum sed fugiat, quia voluptatem incidunt repudiandae nobis eveniet aliquid consectetur minus tenetur distinctio possimus nisi saepe aut amet dolor voluptatibus, eos in beatae cumque perspiciatis! Voluptatibus repellendus nam cupiditate do.', path: '/post2' },
    { id: Date.now(), date: '13.04.2023', title: 'Title', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis animi facere provident quasi id ipsa adipisci officiis, explicabo velit alias quidem illo labore eligendi nostrum officia sunt aperiam. Numquam quam suscipit, minus veniam itaque eligendi nostrum dolore cupiditate quisquam reiciendis voluptatum nam atque maxime aliquam expedita quod a provident illo, odit, illum porro error facere! Odio cum sed fugiat, quia voluptatem incidunt repudiandae nobis eveniet aliquid consectetur minus tenetur distinctio possimus nisi saepe aut amet dolor voluptatibus, eos in bea tae cumque perspiciatis! Voluptatibus repellendus nam cupiditate do.'}
  ]);
  function limitStr() {
    let fullText = [];
    posts.map(post => {
      fullText.push(post.text);
      post.text = post.text.substring(0, 100) + '...';
    })
  }
  limitStr();

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path = '/' element = {<NewsList posts = {posts} />}/>
        </Routes>
        <Outlet/>
      </div>
    </BrowserRouter>
  );
}

export default App;
