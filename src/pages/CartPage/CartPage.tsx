import { Grid, Typography } from '@mui/material'
import CartProductList from 'components/CartHeader/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartHeader/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'

type Props = {}
const CartPage = (props: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div>
            <Typography component="h1" variant="h4">
                Cart
            </Typography>
            <Grid container spacing={4} sx={{ margin: 0 }}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
            <Link to="/checkout">Prooced to checkout</Link>
        </div>
    )
}
export default CartPage
