
function Inventory() {
    const products = [
        {
            id: 1,
            name: "Laptop",
            stock: 10,
            price: 80000
        },
        {
            id: 2,
            name: "Mouse",
            stock: 0,
            price: 1200
        },
        {
            id: 3,
            name: "Keyboard",
            stock: 5,
            price: 3000
        },
        {
            id: 4,
            name: "Monitor",
            stock: 2,
            price: 25000
        }
    ];
    let total = 0;

    products.forEach(product => {
        total += product.price * product.stock;
    });


    return (
        <div>
            <h1>Inventory Management System</h1>

            <h2>All Products</h2>

            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>

                    <p>Price: Rs. {product.price}</p>

                    <p>Stock: {product.stock}</p>

                    <p>
                        Status:{" "}
                        {product.stock > 0 ? "✅ In Stock" : "❌ Out of Stock"}
                    </p>

                    <hr />
                </div>
            ))}

            <h2>Available Products</h2>

            {products
                .filter(product => product.stock > 0)
                .map(product => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Stock: {product.stock}</p>
                    </div>
                ))}

            <hr />

            <h2>Total Inventory Value</h2>

            <h3>Rs. {total}</h3>
        </div>
    );
}

export default Inventory;