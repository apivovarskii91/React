import ProductsList from 'components/ProductsList/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsLike: {
        [id: number]: boolean
    }
}
const Home = ({ addProductToCart, productsLike }: Props) => {
    return (
        <>
            <ProductsList
                addProductToCart={addProductToCart}
                productsLike={productsLike}
            />
            <Reviews />
        </>
    )
}
export default Home
