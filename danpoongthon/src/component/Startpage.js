import React from 'react';
import '../component_css/Startpage.css';


const Startpage =() =>{
    return(
        <div className="startpage">
      <body className="startpage-body">
        <header>

        </header>
        <p className="startpage-textbox">
          <p>평범한 멋사인이던 내가 </p>
          <p>릴레이테일에선 소설 속 주인공?!</p>
        </p>
        
        
        <img className="backgraound-img" 
        src= "./BG_start.png" alt="책장배경"/>
        <div className="hoverbooks">
          <img className="loginbook"
          src = "./loginbook.png" alt="로그인 책"/>
          <img className="registerbook"
          src = "./loginbook2.png" alt="회원가입 책"/>
        </div>
      </body>
    </div>
    );
}

export default Startpage;