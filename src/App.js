import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import { useState } from 'react';



const App = () => {

  const [twootabase, setTwootabase] = useState([
    {
      "author": "John",
       "content": "Hello World"
    },
    {
      "author": "Jane",
      "content": "Hello World"
    },
  ])

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1><span>tweeeeetur. | <Link to="/">Home</Link> | <Link to="/about">About</Link></span></h1>
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
