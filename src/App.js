import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1><span>tweeeeetur. | <Link to="/">Home</Link> | <Link to="/about">About</Link></span></h1>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
