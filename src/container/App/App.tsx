import Footer from './Footer/Footer'
import Header from './Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'
import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import AboutPage from 'pages/AbourPage/AboutPage'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'

type Props = {}

type ProductsInCartType = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
        // 1: 5,
        // 2: 5,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Container component="main" sx={{ padding: '60px 0' }}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home addProductToCart={addProductToCart}></Home>
                        }
                    />
                    <Route
                        path="/cart"
                        element={<CartPage productsInCart={productsInCart} />}
                    ></Route>
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
