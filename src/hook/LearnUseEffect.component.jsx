import { useState,useEffect } from "react";


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
            {toggle && <Avatar />}
        </div>
    )
    
}


export default LearnUseEffect;