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

const storyData=[
    {
        id: 2,
        nickname: "멋셰익스피어",
        bookcontents: '김멋사가 길을 나섰다. 가는 길에 늑대를 마추쳤는데, 빼빼로 하나 주면 안잡아먹지를 외쳤다.',
        book_name: 1
    },
    {
        id: 3,
        nickname: "멋셰익스피어",
        bookcontents: "김멋사가 길을 나섰다. 가는 길에 늑대를 마추쳤는데, 빼빼로 하나 주면 안잡아먹지를 외쳤다.",
        book_name: 1
    },
    {
        id: 3,
        nickname: "멋셰익스피어",
        bookcontents: "김멋사가 길을 나섰다. 가는 길에 늑대를 마추쳤는데, 빼빼로 하나 주면 안잡아먹지를 외쳤다.",
        book_name: 1
    },
    {
        id: 3,
        nickname: "멋셰익스피어",
        bookcontents: "김멋사가 길을 나섰다. 가는 길에 늑대를 마추쳤는데, 빼빼로 하나 주면 안잡아먹지를 외쳤다.",
        book_name: 1
    },
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
                        <button className='writebtn'><img src='./writeBtn.png'></img></button>
                    </div>

                    <div className='menuDiv'>
                        {Data[0].keyword.map(i=>(
                            <div className='keyword'>#{i}</div>
                        ))}
                    </div>

                </div>

                <div className='bookDiv'>
                    <div className='contentDiv'>
                        <div className='title'>
                            제목
                        </div>

                        <div className='storys'>
                            {storyData.map(i=>(
                                <div className='story'>
                                {i.bookcontents} - {i.nickname}
                                </div>
                            ))}                       
                        </div>                      

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;