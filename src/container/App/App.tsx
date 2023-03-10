import Footer from './Footer/Footer'
import Header from './Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'
import { Button, Container } from '@mui/material'
import Home from 'pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import AboutPage from 'pages/AbourPage/AboutPage'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'
import { omit } from 'lodash'

type Props = {}

type ProductsInCartType = {
    [id: number]: number
}
type ProductsLike = {
    [id: number]: boolean
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
        1: 5,
        2: 5,
    })

    const [productsLike, setProductsLike] = useState<ProductsLike>({
        1: true,
        3: true,
    })

    const toggleLike = (id: number) => {
        setProductsLike((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => omit(prevState, id))
    }

    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: count,
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
                            <Home
                                addProductToCart={addProductToCart}
                                productsLike={productsLike}
                                toggleLike={toggleLike}
                            ></Home>
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                                changeProductQuantity={changeProductQuantity}
                            />
                        }
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
