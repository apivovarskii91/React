import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = () => {
    return <h1>Hello App.js</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis rerum ea eveniet laudantium porro iure, repudiandae quis
                sunt voluptate repellendus optio facere rem modi totam non
                eligendi fuga a inventore.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                accusantium impedit eum voluptatibus ad qui pariatur quae, eius
                libero nulla quisquam harum saepe quidem mollitia enim molestiae
                reprehenderit quasi beatae?
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Header />
            <Content />
        </>
    )
} // компоненти

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
