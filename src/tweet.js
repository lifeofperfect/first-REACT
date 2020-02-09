import React from 'react'
import './App.css'


function Tweet({name, message}) {
    return(
        <div className='tweet'>
            <h1>{name}</h1>
            <p>{message}</p>
            <h3>Number of tweet</h3>
        </div>
    )
}


export default Tweet;