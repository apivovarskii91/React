import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'

type Props = {
    product: Product
    productCount: number
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}
const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: ${product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                        count={productCount}
                        onDecrement={() =>
                            changeProductQuantity(product.id, productCount - 1)
                        }
                        onIncrement={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                    />
                </CardContent>
                <Button
                    variant="outlined"
                    onClick={() => removeProductFromCart(product.id)}
                >
                    <DeleteIcon />
                </Button>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
