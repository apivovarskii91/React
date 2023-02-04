import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'

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
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 14 Pro"
                        description="This is iPhone 14 Pro"
                        type="phone"
                        capacity="256"
                        price={1500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 13 Pro"
                        description="This is iPhone 13 Pro"
                        type="phone"
                        capacity="128"
                        price={1000}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 12 Pro"
                        description="This is iPhone 12 Pro"
                        type="phone"
                        capacity="64"
                        price={500}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
