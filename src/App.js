import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

import './App.css';

const App = () => {

  const [twootabase, setTwootabase] = useState([
    {
      "id": "1",
      "author": "John",
       "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "id": "2",
      "author": "Jane",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu dolor, auctor eget nulla vitae, commodo ultricies purus. Phasellus egestas at odio eget dictum. Sed efficitur tortor ac pharetra bibendum. Vestibulum eget nunc sed nibh consectetur ultrices. Etiam sed convallis metus, quis tincidunt ante. Sed auctor id erat ut bibendum. Aenean mollis, metus tempor rhoncus pharetra, dolor ex mattis tortor, ac commodo nisl massa in nulla. Pellentesque velit velit, aliquet sed ligula in, tincidunt laoreet nulla. Nullam enim nibh, rhoncus ut laoreet commodo, bibendum id libero. Maecenas consectetur varius arcu eget varius. Curabitur pharetra bibendum ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ])

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1 className="title"><span>tweeeeetur. | <Link to="/">Home</Link> | <Link to="/about">About</Link></span></h1>
        </nav>
        <Routes>
          <Route path="/" element={ <Home twootabase = { twootabase } /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="*" element={ <ErrorPage /> } /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
