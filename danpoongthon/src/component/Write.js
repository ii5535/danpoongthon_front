import {useLocation, Link} from 'react-router-dom';
import Header from './Header'
import '../component_css/Write.css';
import '../component_css/Main.css';

// dummy data
const Data=[
    {
        userName: '김멋사',
        genre : '판타지',
        keyword : ['keyword1','keyword2','keyword3']
    }
]

function Write(){
    return(
        <>
            <Header></Header>
            <div className='componentDiv'>
                <div className='holemenuDiv'>
                        <div className='menuDiv'>
                            <div className='menu'>
                                주인공 
                            </div>
                            <div className='bar'>
                                |
                            </div>
                            <div className='dataname'>
                                {Data[0].userName}
                            </div>
                        
                            <div className='menu'>
                                장르
                            </div>
                            <div className='bar'>
                                |
                            </div>
                            <div className='data'>
                                {Data[0].genre}
                            </div>
                        </div>
                    
                        <div className='menuDiv'>
                            {Data[0].keyword.map(i=>(
                                <div className='keyword'>#{i}</div>
                            ))}
                        </div>
                </div>

                <div className='writeDiv'>
                    <div className='writerDiv'>
                        <div className='writer'>
                            글쓴이
                        </div>
                        <div className='writer'>
                            |
                        </div>
                        <input type='text' className='inputWriter'></input>        
                    </div>

                    <div className='inputTextDiv'>
                        <textarea cols="10" rows="2" placeholder="내용을 입력해주세요." className='inputText'></textarea>                  

                    </div>

                    <div>
                        <img src='./doneBtn.png'></img>
                    </div>

                    
                    

                </div>

            </div>
        </>
    )
}

export default Write;