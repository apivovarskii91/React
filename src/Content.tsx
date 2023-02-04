import classes from './Content.module.css'
const { content, purple, peru } = classes

type ContentProps = {
    text1: string
    text2: string
}

const Content = ({ text1, text2 }: ContentProps) => {
    let date = true
    return (
        <>
            <p className={`${content} ${date ? purple : peru}`}>{text1}</p>
            <p>{text2}</p>
        </>
    )
}

export default Content
