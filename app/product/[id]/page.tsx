interface ProductPageProps {
    params: { id: string };
}

export default  function ProductPage({ params }: ProductPageProps) {
    return (
        <main>
            <h1>Product ID: {params.id}</h1>
            <p>Product details will load here</p>
        </main>
    );
}