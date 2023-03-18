import Footer from './Footer/Footer'
import Header from './Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { Button, Container } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import AboutPage from 'pages/AbourPage/AboutPage'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'
import Home from 'pages/Home/Home'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Container component="main" sx={{ padding: '60px 0' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<CartPage />}></Route>
                    <Route path="/about" element={<AboutPage />}></Route>
                    <Route path="/payment" element={<PaymentPage />}></Route>
                    <Route path="/shipping" element={<ShippingPage />}></Route>
                </Routes>
            </Container>
            <Footer />
        </>
    )
}
export default App
