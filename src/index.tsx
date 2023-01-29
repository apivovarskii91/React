import React from 'react'
import ReactDOM from 'react-dom/client'

interface HeaderProps {
    title: string
}

type ContentProps = {
    text1: string
    text2: string
}
const Header = (props: HeaderProps) => {
    return <h1>Hello {props.title}</h1>
}

const Content = (props: ContentProps) => {
    return (
        <React.Fragment>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Header title="React" />
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
