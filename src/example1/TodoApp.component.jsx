// import React from 'react';

import { useState } from "react";


function TodoApp(){

    const [job,setJob] = useState('')

    const [jobs,setJobs] = useState(()=>{
        const check = localStorage.getItem('jobs')
        if(check!==''){
            const JobsLocalStorage = JSON.parse(localStorage.getItem('jobs'))
            console.log(JobsLocalStorage)
            return JobsLocalStorage ?? []
        }else{
            localStorage.removeItem('jobs')
            return []
        }
    })
    
    const handleSubmit = ()=>{
        setJobs(prev=>{
            const newJobs = [...prev,job]
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs',jsonJobs)
            return newJobs
        })
        setJob('')
    }
    
    const handleDelete = (data)=>{
        setJobs(prev=>{
            const checkJob = jobs.includes(data)
            // console.log(checkJob)
            if(checkJob){
                const afterDelete = jobs.filter( job => job!==data)
                localStorage.setItem('jobs',afterDelete)
                return afterDelete
            }
            // else{
            //     return [...prev,data]
            // }
        })
    }

    return (
        <div>
            <h1>Todo App</h1>
            <input
                value={job}
                onChange={e=>setJob(e.target.value)}
            />
            <button 
                onClick={handleSubmit}
            >
                Add
            </button>

            <div>
                <ul>
                    {jobs.map((job,index) => (
                        <li key={index}><span>{job} </span><button value={job} onClick={e=>handleDelete(e.target.value)}>Delete</button></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoApp;