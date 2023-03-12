import {
    Button,
    Card,
    CardContent,
    CardActions,
    TextField,
} from '@mui/material'
import { Component, useState } from 'react'
import './ProductsListItem.scss'
import Quantity from 'components/Quantity/Quantity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'

type Props = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
    addProductToCart: (id: number, count: number) => void
}

const ProductListItem = ({
    id,
    title,
    description,
    type,
    capacity,
    price,
    image,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const [color, setColor] = useState<string>('green')

    const changeColor = () => {
        setColor((prevState: string) =>
            prevState === 'green' ? 'red' : 'green'
        )
    }

    const onIncrement = () => {
        setCount((prevState: number) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState: number) => prevState - 1)
    }

    const isLiked = useAppSelector((state) => state.productsLike[id])
    const dispatch = useAppDispatch()

    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <Button
                    variant="outlined"
                    onClick={() =>
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type:{type}</div>
                <div className="product-features">Capacity:{capacity}Gb</div>
                <div className="product-price">Price:{price}$</div>
                <p> Color: {color}</p>
                <button onClick={() => changeColor()}>Change color</button>
                <Quantity
                    count={count}
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                    minCount={1}
                />
            </CardContent>
            <CardActions className="btns-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
