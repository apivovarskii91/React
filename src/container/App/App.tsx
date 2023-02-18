import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'

type Props = {}

type ProductsInCartType = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
        1: 5,
        2: 5,
        3: 1,
    })

    const addProductToCart = (count: number, price: number) => {}
    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => addProductToCart(5, 500)}>
                Add to cart (5 count, 500 $ - price)
            </button>
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </>
    )
}
export default App
