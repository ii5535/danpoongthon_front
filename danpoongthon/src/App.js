import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './component/Home';
import Main from './component/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 시작페이지 */}
          <Route exact path="/" element={<Home />}/>

          {/* 메인페이지 */}
          <Route exact path="main" element={<Main />}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
