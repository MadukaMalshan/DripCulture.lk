import { products } from "../../data/product";

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;

    const product = products.find((product) => product.id === id);

    if (!product) {
        return (

            <h1>Product not found</h1>
        );
    }
    return (
        <main>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: Rs.{product.price}</p>
            
            <button>Add to Cart</button>
        </main>
    );
}