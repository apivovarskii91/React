import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                component={'h2'}
                variant="h4"
                align="center"
                sx={{ marginBottom: '30px' }}
            >
                Products List
            </Typography>

            <Grid container spacing={4}>
                {productsArray.map((product, i) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductListItem
                            title={product.title}
                            description={product.description}
                            type={product.type}
                            capacity={product.capacity}
                            price={product.price}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default ProductsList
