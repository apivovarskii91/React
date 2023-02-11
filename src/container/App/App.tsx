import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'
import CssBaseline from '@mui/material/CssBaseline'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </>
    )
}
export default App
