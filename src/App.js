// import logo from '@/logo.svg';
import '@/App.css';
import Home from '@/pages/Home';
import Error from '@/pages/Error';
import Logement from '@/pages/Logement';
import About from '@/pages/About';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '@/pages/Layout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/logement/:id" element={<Logement/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
