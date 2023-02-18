import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'

type Props = {}

type CartData = {
    totalCount: number
    totalPrice: number
}

const App = (props: Props) => {
    const [cartData, setCartDate] = useState<CartData>({
        totalCount: 0,
        totalPrice: 0,
    })

    const addProductToCart = (count: number, price: number) => {
        setCartDate((prevState) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + price * count,
        }))
    }
    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <button onClick={() => addProductToCart(5, 500)}>
                Add to cart (5 count, 500 $ - price)
            </button>
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </>
    )
}
export default App
