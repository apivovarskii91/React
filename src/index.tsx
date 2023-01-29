import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './Header'

function App() {
    return <h1>Hello App.js</h1>
} // компоненти

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
