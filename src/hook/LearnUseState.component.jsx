// import React from 'react'; // trong nay co san useState
import { useState } from "react";


// bai tap 1
// const orders = [100,200,300];
// function LearnUseState() {

//     const [ counter, setCounter ] = useState(1);//state bth 
//     // const [ counter, setCounter ] = useState(()=>{
//     //     const total = orders.reduce((total, current) => total+current);
//     //     console.log(total);
//     //     return total;
//     // });// inital state

//     const handleCounter = () => {
//         setCounter(prev=>prev+1)
//     }

//     return (
//         <div>
//             learning useState
//             <h1>{counter}</h1>
//             <button onClick={handleCounter}>
//                 increase
//             </button>
//         </div>
//     )
// }


// bai tap 2
// function LearnUseState() {
//     const [ info,setInfo ] = useState({
//         name:"bui duc hieu",
//         age:"20",
//         address:"da nang"
//     });
    
//     // sử dụng cách thông dụng
//     const handleUpdate = () => {
//         setInfo({
//             ...info,
//             hobby:"listen to music"
//         })
//     }

//     //sử dụng call back
//     // const handleUpdate = () => {
//     //     setInfo(prev=>({
//     //         ...prev,
//     //         hobby:"listen to music"
//     //     }))
//     // }


//     return (
//         <div>
//             learning LearnUseState
//             <h1>{JSON.stringify(info)}</h1>
//             <button onClick={handleUpdate}>Update</button>
//         </div>
//     )
// }

// bai tap 3
const gifts=[
    'i9 CPU',
    'Mainboard Z490',
    'Xigmatek OMG!',
    'Chúc bạn may mắn lần sau'
]
function LearnUseState() {

    const [ gift, setGift ] = useState();

    const randomGift = ()=>{
        let random = Math.floor(Math.random()*gifts.length);
        setGift(gifts[random]);
    }

    return (
        <div>
            <h1>Learning useState</h1>
            <h2>{ gift||'chưa nhận được phần thưởng nào' }</h2>
            <button onClick={randomGift}>
                nhận quà
            </button>
        </div>
    )
}


// bai tap 4
// const courses = [
//     {
//         id: 1,
//         name:'HTML, CSS'
//     },
//     {
//         id: 2,
//         name:'JavaScript'
//     },
//     {
//         id: 3,
//         name:'ReactJs'
//     }
// ]
// function LearnUseState() {

//     const [ checked, setChecked ] = useState();

//     const handleRegister = ()=>{
//         console.log({id:checked})
//     }

//     return (
//         <div>
//             <h1>Learning useState</h1>
//             {courses.map(course=>(
//                 <div key={course.id}>
//                     <input
//                         type="radio"
//                         checked={course.id === checked}
//                         onChange={()=>{setChecked(course.id)}}
//                     />
//                         {course.name}
//                 </div>
//             ))}
//             <button onClick={handleRegister}>
//                 Register
//             </button>
//         </div>
//     )
// }

// bai tap 5
// const courses = [
//     {
//         id: 1,
//         name:'HTML, CSS'
//     },
//     {
//         id: 2,
//         name:'JavaScript'
//     },
//     {
//         id: 3,
//         name:'ReactJs'
//     }
// ]
// function LearnUseState() {

//     const [ checked, setChecked ] = useState([]);

//     const handleChecked = (id)=>{
//         setChecked((prev)=>{
//             const isChecked = checked.includes(id);
//             if(isChecked) {
//                 return checked.filter(item=> item!==id);
//             }else{
//                 return [...prev,id];
//             }
//         })
//     }

//     const handleRegister = ()=>{
//         console.log({id:checked})
//     }

//     return (
//         <div>
//             <h1>Learning useState</h1>
//             {courses.map(course=>(
//                 <div key={course.id}>
//                     <input
//                         type="checkbox"
//                         checked={checked.includes(course.id)}
//                         onChange={()=>handleChecked(course.id)}
//                     />
//                         {course.name}
//                 </div>
//             ))}
//             <button onClick={handleRegister}>
//                 Register
//             </button>
//         </div>
//     )
// }
export default LearnUseState; 