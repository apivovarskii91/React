import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './Header'
import Content from './Content'
import List from './List'

const App = () => {
    return (
        <>
            <Header title="React" year={2023} />
            <Header title="TS" />
            <Content
                text1="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis rerum ea eveniet laudantium porro iure, repudiandae quis
                sunt voluptate repellendus optio facere rem modi totam non
                eligendi fuga a inventore."
                text2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                accusantium impedit eum voluptatibus ad qui pariatur quae, eius
                libero nulla quisquam harum saepe quidem mollitia enim molestiae
                reprehenderit quasi beatae?"
            />
            <List item1="App" item2="React" item3="TS" />
        </>
    )
} // компоненти

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
