import { Button, Card, CardContent, CardActions } from '@mui/material'
import './ProductsListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const ProductListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    image,
}: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type:{type}</div>
                <div className="product-features">Capacity:{capacity}Gb</div>
                <div className="product-features">Price:{price}$</div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductListItem
