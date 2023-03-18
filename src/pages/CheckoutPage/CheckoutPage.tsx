import { Typography } from '@mui/material'

type Props = {}
const CheckoutPage = (props: Props) => {
    return (
        <div>
            <Typography
                component="h1"
                variant="h4"
                sx={{ marginBottom: '40px' }}
            >
                Checkout
            </Typography>
        </div>
    )
}
export default CheckoutPage
