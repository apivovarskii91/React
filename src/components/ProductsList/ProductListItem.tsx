import {
    Button,
    Card,
    CardContent,
    CardActions,
    TextField,
} from '@mui/material'
import { color } from '@mui/system'
import { Component } from 'react'
import './ProductsListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

type State = {
    count: number
    color: string
}

class ProductListItem extends Component<Props, State> {
    state = {
        count: 1,
        color: 'green',
    }

    onIncrementClick = (num: number) => {
        this.setState((prevState: State) => ({
            count: prevState.count + num,
        }))
    }
    onDecrementClick = () => {
        this.setState((prevState: State) => ({
            count: prevState.count - 1,
        }))
    }

    changeColor = () => {
        this.setState((prevState: State) => ({
            color: prevState.color === 'green' ? 'red' : 'green',
        }))
    }

    render() {
        const { title, description, type, capacity, price, image } = this.props

        return (
            <Card variant="outlined" className="product">
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="product-title">{title}</div>
                    <div className="product-description">{description}</div>
                    <div className="product-features">Type:{type}</div>
                    <div className="product-features">
                        Capacity:{capacity}Gb
                    </div>
                    <div className="product-price">Price:{price}$</div>
                    <div>
                        Color:
                        <span className={this.state.color}>
                            {this.state.color}
                        </span>
                    </div>
                    <button onClick={this.changeColor}>Change color</button>
                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={this.onDecrementClick}
                            disabled={this.state.count <= 1}
                        >
                            -
                        </Button>
                        <TextField size="small" value={this.state.count} />
                        <Button
                            variant="outlined"
                            onClick={() => this.onIncrementClick(3)}
                        >
                            +
                        </Button>
                    </div>
                </CardContent>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductListItem
