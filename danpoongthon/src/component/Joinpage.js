//import React, { useState } from 'react';
import '../component_css/Join.css';

const Joinpage =() =>{
    return(
        <div className ="Loginpage">
            <header>

            </header>

            <body className = "body">
                <div className="Loginbox">
                    <div className="titleWrap">
                    JOIN    
                    </div>

                    <div className="contentWrap">
                        <div className="inputTitle">이름</div>
                        <div className="inputWrap">
                            <input className="input"/>
                        </div>


                        <div style={{marginTop: "30px"}}className="inputTitle">아이디</div>
                        <div className="inputWrap">
                            <input 
                                className="input"
                                placeholder="김멋사@gmail.com"
                            
                                />
                        </div>

                        <div className="errorMessageWrap">
                            올바른 이메일 형식의 아이디를 입력해주세요.
                        </div>

                        <div style={{marginTop: "30px"}}className="inputTitle">비밀번호</div>
                        <div className="inputWrap">
                            <input className="input"
                            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                            
                            />
                        </div>

                        <div className="errorMessageWrap">
                            영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
                        </div>
                    </div>

                    <div className='bottomButtonWrap'>
                        <button disabled={true}
                        className="bottomButton">
                            회원가입
                        </button>
                    </div>

                </div>
            </body>


            <div className = "imgbox">
                <img className = "Loginpagebg"
                src="./BG_login.png" alt="회원가입 배경">
                </img>
            </div>
        </div>
    );

}

export default Joinpage;