import './styles/App.css'
import { useState } from 'react';
import NewsList from './components/NewsList';


function App() {
  const [posts, setPosts] = useState([
    {id: Date.now(), date: '11.04.2023', title: 'Title', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis animi facere provident quasi id ipsa adipisci officiis, explicabo velit alias quidem illo labore eligendi nostrum officia sunt aperiam. Numquam quam suscipit, minus veniam itaque eligendi nostrum dolore cupiditate quisquam reiciendis voluptatum nam atque maxime aliquam expedita quod a provident illo, odit, illum porro error facere! Odio cum sed fugiat, quia voluptatem incidunt repudiandae nobis eveniet aliquid consectetur .'},
    {id: Date.now(), date: '12.04.2023', title: 'Title', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis animi facere provident quasi id ipsa adipisci officiis, explicabo velit alias quidem illo labore eligendi nostrum officia sunt aperiam. Numquam quam suscipit, minus veniam itaque eligendi nostrum dolore cupiditate quisquam reiciendis voluptatum nam atque maxime aliquam expedita quod a provident illo, odit, illum porro error facere! Odio cum sed fugiat, quia voluptatem incidunt repudiandae nobis eveniet aliquid consectetur minus tenetur distinctio possimus nisi saepe aut amet dolor voluptatibus, eos in beatae cumque perspiciatis! Voluptatibus repellendus nam cupiditate do.' },
  ]);
function limitStr () {
  console.log(posts.length)
  let postText = posts.text;
  for (let i = 0; i < posts.length; i++) {
    posts[i] = postText[i].substr(0, 100) + '...'; 
  }
}
limitStr();
 console.log(posts[1].text.length)

  return (
    <div className="App">
      <NewsList posts = {posts}/>
    </div>
  );
}

export default App;
