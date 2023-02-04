type ContentProps = {
    text1: string
    text2: string
}

const Content = ({ text1, text2 }: ContentProps) => {
    let data = false
    return (
        <>
            <p
                style={{
                    backgroundColor: data ? 'purple' : 'green',
                    color: 'white',
                    padding: '15px',
                }}
            >
                {text1}
            </p>
            <p>{text2}</p>
        </>
    )
}

export default Content
