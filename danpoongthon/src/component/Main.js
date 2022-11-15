import {useLocation, Link} from 'react-router-dom';
import Header from './Header'
import '../component_css/Main.css';

// dummy data
const Data=[
    {
        userName: '김멋사',
        genre : '판타지',
        keyword : ['keyword1','keyword2','keyword3']
    },
    {
        writer: '멋셰익스피어',
        text : '김멋사가 길을 나섰다. 가는 길에 늑대를 마추쳤는데, 빼빼로 하나 주면 안잡아먹지를 외쳤다.'
    }
]

function Main(){
    
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
                        <div>
                            {Data[0].userName}
                        </div>
                    </div>

                    <div className='menuDiv'>
                        <div className='menu'>
                            장르
                        </div>
                        <div className='bar'>
                            |
                        </div>
                        <div>
                            {Data[0].genre}
                        </div>
                    </div>

                    <div className='menuDiv'>
                        {Data[0].keyword.map(i=>(
                            <div>#{i}</div>
                        ))}
                    </div>

                </div>

                <div className='bookDiv'>
                    <div className='title'>
                        제목
                    </div>
                    {/* <div>
                        제목
                    </div>
                    <div>
                        제목
                    </div>
                    <div>
                        제목
                    </div>
                    <div className='title'>
                        jgjgjgjg
                    </div>
                     */}
                </div>


            </div>
        </>
    )
}

export default Main;