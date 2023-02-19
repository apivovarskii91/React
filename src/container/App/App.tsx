import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'
import { count } from 'console'

type Props = {}

type ProductsInCartType = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
        1: 5,
        2: 5,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: prevState[id] + count,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => addProductToCart(2, 1)}>
                Add to cart (2 id, count 1)
            </button>
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </>
    )
}
export default App
