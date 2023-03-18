import ProductsList from 'components/ProductsList/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <ProductsList />
            <Reviews />
        </>
    )
}
export default Home
