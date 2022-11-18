import {useLocation, Link} from 'react-router-dom';
import React, { useRef } from "react";
import Header from './Header'
import '../component_css/Main.css';
import { useEffect } from 'react';

// dummy data
// const Data=[
//     {
//         userName: '김멋사',
//         genre : '판타지',
//         keyword : ['keyword1','keyword2','keyword3']
//     },
//     {
//         writer: '멋셰익스피어',
//         text : '김멋사가 길을 나섰다. 가는 길에 늑대를 마추쳤는데, 빼빼로 하나 주면 안잡아먹지를 외쳤다.'
//     }
// ]

// const storyData=[
//     {
//         id: 2,
//         nickname: "멋셰익스피어",
//         bookcontents: '김멋사가 길을 나섰다. 가는 길에 늑대를 마추쳤는데, 빼빼로 하나 주면 안잡아먹지를 외쳤다.',
//         book_name: 1
//     },
//     {
//         id: 3,
//         nickname: "멋셰익스피어",
//         bookcontents: "김멋사가 길을 나섰다. 가는 길에 늑대를 마추쳤는데, 빼빼로 하나 주면 안잡아먹지를 외쳤다.",
//         book_name: 1
//     },
//     {
//         id: 3,
//         nickname: "멋셰익스피어",
//         bookcontents: "김멋사가 길을 나섰다. 가는 길에 늑대를 마추쳤는데, 빼빼로 하나 주면 안잡아먹지를 외쳤다.",
//         book_name: 1
//     },
//     {
//         id: 3,
//         nickname: "멋셰익스피어",
//         bookcontents: "김멋사가 길을 나섰다. 가는 길에 늑대를 마추쳤는데, 빼빼로 하나 주면 안잡아먹지를 외쳤다.",
//         book_name: 1
//     },
// ]

const ddata={
    id: 1,
    user_name: "김멋사",
    book_name: "김멋사의 소설",
    genre: "판타지",
    key_word1: "키워드1",
    key_word2: "키워드2",
    key_word3: "키워드3",
    bookdetail: [
        {
            id: 1,
            nickname: "닉네임",
            bookcontents: "김멋사가 길을 나섰다. 가는 길에 늑대를 마추쳤는데, 빼빼로 하나",
            book_name: ''
        },
        {
            id: 2,
            nickname: "닉네임2",
            bookcontents: "김멋사가 길을 나섰다. 가는 길에 늑대를 마추쳤는데, 빼빼로 하나 주면 안잡아먹지를 외쳤다.",
            book_name: ''
        },
       
    ]
}


function Main(){
    // const [data,setData]=useState(ddata)

    // // 서버에게서 데이터 get
    // useEffect(()=>{
    //     axios.get(`/booklist/${booklist-id}`)
    //     .then((response)=>{
    //         console.log(response);
    //         setData(response.data.data);
    //     })
    // })

    const copyLinkRef = useRef();

    function copyTextUrl() {
        // console.log(copyLinkRef);
        // copyLinkRef.current.focus();
        // copyLinkRef.current.select();

        const url=window.location.href;

        navigator.clipboard.writeText(url).then(() => {
            alert("링크를 복사했습니다.");
        });
        
        // navigator.clipboard.writeText(copyLinkRef.current.value).then(() => {
        //     alert("링크를 복사했습니다.");
        // });
    }
    
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
                            {ddata.user_name}
                        </div>
                    
                        <div className='menu'>
                            장르
                        </div>
                        <div className='bar'>
                            |
                        </div>
                        <div className='data'>
                            {ddata.genre}
                        </div>
                    </div>

                    <div className='menuDiv'>
                        <Link to="/Write" state={{
                            user_name: (ddata.user_name),
                            genre : (ddata.genre),
                            key_word1: (ddata.key_word1),
                            key_word2: (ddata.key_word2),
                            key_word3: (ddata.key_word3),
                        } }>
                            <img src='./writeBtn.png'></img>
                        </Link>
                    </div>

                    <div className='menuDiv'>
                        <div className='keyword'>#{ddata.key_word1}</div>
                        <div className='keyword'>#{ddata.key_word2}</div>
                        <div className='keyword'>#{ddata.key_word3}</div>
                        <img onClick={copyTextUrl} className='share' src='./share.png'></img>
                        {/* {Data[0].keyword.map(i=>(
                            <div className='keyword'>#{i}</div>
                        ))} */}
                    </div>



                </div>

                <div className='bookDiv'>
                    <div className='contentDiv'>
                        <div className='title'>
                            {ddata.book_name}
                        </div>

                        <div className='storys'>
                            {ddata.bookdetail.map(i=>(
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