import ProductsList from 'components/ProductsList/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsLike: {
        [id: number]: boolean
    }
    toggleLike: (id: number) => void
}
const Home = ({ addProductToCart, productsLike, toggleLike }: Props) => {
    return (
        <>
            <ProductsList
                addProductToCart={addProductToCart}
                productsLike={productsLike}
                toggleLike={toggleLike}
            />
            <Reviews />
        </>
    )
}
export default Home
