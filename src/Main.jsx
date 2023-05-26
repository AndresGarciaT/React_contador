import React from 'react'
import ReactDOM from 'react-dom/client'
import  CounterApp from './CounterApp'
import './ConterApp.css'

ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <CounterApp value={1}/>
    </React.StrictMode>
)
