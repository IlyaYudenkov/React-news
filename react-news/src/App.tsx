import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsList from './components/NewsList/NewsList';
import NewsPage from './components/NewsPage/NewsPage';
import React from 'react';

function App(){

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<NewsList/>} />
          <Route path='view/:postId' element={<NewsPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
