import { Container } from '@mui/system'
import Home from 'pages/Home/Home'

type Props = {}
const Main = (props: Props) => {
    return (
        <Container component="main" sx={{ padding: '60px 0px' }}>
            <Home />
        </Container>
    )
}
export default Main
