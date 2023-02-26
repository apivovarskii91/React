import productsArray, { getProductsObject, Product } from 'utils/productsArray'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from './CartProductList/CartProductList'
type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <div>
                <CartTotal productsInCart={productsInCart} />
            </div>
        </div>
    )
}
export default CartHeader
