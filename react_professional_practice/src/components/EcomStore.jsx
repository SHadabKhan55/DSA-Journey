function EcommerceStore() {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 250000,
      discount: 10,
      stock: 5
    },
    {
      id: 2,
      name: "Samsung S25",
      price: 220000,
      discount: 15,
      stock: 0
    },
    {
      id: 3,
      name: "Google Pixel",
      price: 180000,
      discount: 5,
      stock: 8
    }
  ];

  return (
    <div>
      <h1>E-Commerce Store</h1>

      {products.map(product => {
        const finalPrice =
          product.price - (product.price * product.discount) / 100;

        return (
          <div key={product.id}>
            <h2>{product.name}</h2>

            <p>Original Price: Rs. {product.price}</p>

            <p>Discount: {product.discount}%</p>

            <p>Final Price: Rs. {finalPrice}</p>

            <p>
              Status:{" "}
              {product.stock > 0
                ? "🛒 Add To Cart"
                : "❌ Out Of Stock"}
            </p>

            {product.discount > 10 && (
              <p>🔥 Hot Deal</p>
            )}

            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default EcommerceStore;