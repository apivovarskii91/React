import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { toggleLike } from 'redux/likeReducer'
import { removeProductFromCart } from 'redux/cartReducer'

type Props = {
    product: Product
    productCount: number
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}
const CartProductListItemExtended = ({
    product,
    productCount,
    changeProductQuantity,
}: Props) => {
    const isLiked = useAppSelector((state) => state.productsLike[product.id])
    const dispatch = useAppDispatch()
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <Button
                        variant="outlined"
                        onClick={() => dispatch(toggleLike(product.id))}
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: ${product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                        count={productCount}
                        onDecrement={() =>
                            productCount === 1
                                ? removeProductFromCart(product.id)
                                : changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }
                        onIncrement={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                        minCount={0}
                    />
                </CardContent>
                <Button
                    variant="outlined"
                    onClick={() => dispatch(removeProductFromCart(product.id))}
                >
                    <DeleteIcon />
                </Button>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
