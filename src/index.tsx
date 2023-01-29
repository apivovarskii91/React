import React from 'react'
import ReactDOM from 'react-dom/client'

interface HeaderProps {
    title: string
    year?: number
}

type ContentProps = {
    text1: string
    text2: string
}
const Header = ({ title, year }: HeaderProps) => {
    return (
        <h1>
            Hello {title},{year}
        </h1>
    )
}

const Content = ({ text1, text2 }: ContentProps) => {
    return (
        <React.Fragment>
            <p>{text1}</p>
            <p>{text2}</p>
        </React.Fragment>
    )
}

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
        </>
    )
} // компоненти

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
