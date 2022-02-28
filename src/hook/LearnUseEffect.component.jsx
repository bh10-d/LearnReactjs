import { useState,useEffect } from "react";


//bai tap 1
const list = ['posts','comments','albums','photos','todos','users'];

function Content (){

    const [type,setType] = useState('posts');
    const [data,setData] = useState([]);
    const [goToTop,setGoToTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`).then(res => res.json()).then(data => setData(data));
    },[type]);

    useEffect(() => {
        const handleScroll=()=>{
            setGoToTop(window.scrollY >= 200);
        }
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[]);

    const handleGotoTop = ()=>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return(
        <div>
            {list.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {color: '#fff', background: '#333'} : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ) )}
            {goToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                    onClick={handleGotoTop}
                >
                    go to top
                </button>
            )}
            <ul>
                {data.map(d=>(
                    <li key={d.id} style={{backgroundColor: '#f4f4f4', listStyleType: 'circle'}}>
                        {d.title || d.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

//bai tap 2
function Avatar(){
    const [avatar,setAvatar] = useState()

    useEffect(() =>{
        //CleanUp
        return()=>{
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])


    const handlePreview = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    return(
        <div>
            <input type="file" onChange={handlePreview} />
            {avatar && (
                <img src={avatar.preview} alt="" />
            )}
        </div>
    )
}

// bai tap 3
const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì? Tại sao nên học ReactJS?'
    },
    {
        id: 2,
        name: 'SPA/MPA là gì ?'
    },
    {
        id: 3,
        name: 'Arow function'
    }
]
function Comment() {
    const [lessonId,setLessonId] = useState(1)

    useEffect(() => {
        const handleComment = ({detail}) =>{
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonId}`,handleComment)
        //Clean Up

        return ()=>{
            window.removeEventListener(`lesson-${lessonId}`,handleComment)
        }
    },[lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li 
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 'red' : '#333',
                            cursor: 'pointer'
                        }}
                        onClick={()=>setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

function LearnUseEffect() {
    const [toggle,setToggle] = useState(false);
    return(
        <div>
            <h1>Learning useEffect</h1>
            <button
                onClick={() => setToggle(!toggle)}
            >
                Toggle
            </button>
            {/* {toggle && <Content />} */}
            {/* {toggle && <Avatar />} */}
            {toggle && <Comment />}
        </div>
    )
    
}


export default LearnUseEffect;