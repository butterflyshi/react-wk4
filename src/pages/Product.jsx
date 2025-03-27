import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import products from "../json/books.json";

function Product() {
    const { productId } = useParams();
    const product = products.find(
        (x) => x.ID === Number(productId)
    );

    return (
        <div className="container mx-auto main-layout bg-gray-900">
            <Helmet>
                <title>product</title>
            </Helmet>
            <Header
                title= "Product Detail"
                slogan= "An example made by Vite."
            />
            <ProductDetail product={product} className="content" />
            <Footer className="footer" />
        </div>
    );
}

export default Product;