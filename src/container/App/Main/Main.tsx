import { Container } from '@mui/system'
import Home from 'pages/Home/Home'

type Props = {
    addProductToCart: (id: number, count: number) => void
}
const Main = ({ addProductToCart }: Props) => {
    return (
        <Container component="main" sx={{ padding: '60px 0px' }}>
            <Home addProductToCart={addProductToCart} />
        </Container>
    )
}
export default Main
