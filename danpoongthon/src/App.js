import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './component/Home';
import Main from './component/Main';
import Write from './component/Write';
import Create from './component/Create';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 시작페이지 */}
          <Route exact path="/" element={<Home />}/>
          
          {/* 책 생성 페이지 */}
          <Route exact path="create" element={<Create />}/>

          {/* 메인페이지 */}
          <Route exact path="main" element={<Main />}/>
          {/* 글 작성 페이지 */}
          <Route exact path="write" element={<Write />}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
