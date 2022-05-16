import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import Lite from './pages/Lite';
import FirebaseHome from './pages/FirebaseHome';
import RTDBHome from './pages/RTDBHome';

import './App.scss';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1 className="title"><span>tweeeeetur. | <Link to="/">Home</Link> | <Link to="/mini">Mini</Link> | <Link to="/lite">Lite</Link> | <Link to="/about">About</Link></span></h1>
        </nav>
        <Routes>
          <Route path="/" element={ <FirebaseHome /> } />
          <Route path="/mini" element={ <RTDBHome /> } />
          <Route path="/lite" element={ <Lite /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="*" element={ <ErrorPage /> } /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
