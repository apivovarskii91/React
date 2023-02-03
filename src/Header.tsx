type HeaderProps = {
    title: string
    year?: number
}
export const Header = ({ title, year }: HeaderProps) => {
    return (
        <h1>
            Hello {title}, {year}
        </h1>
    )
}

// export default Header
