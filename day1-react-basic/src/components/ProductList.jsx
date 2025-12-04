export function Productlist(){

    const products = [
    { id: 1, name: 'Laptop', price: 999, inStock: true },
    { id: 2, name: 'Mouse', price: 25, inStock: true },
    { id: 3, name: 'Keyboard', price: 75, inStock: false }
  ];

  return(
    <>
        <div style={{padding: '20px' }}>
            <h2>Products</h2>
            {products.map(product=>(
                <div key={product.id} style={{padding: '12px', 
            margin: '8px 0',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: product.inStock ? '#f0f9ff' : '#fee'}}>
                 <strong>{product.name}</strong> - ${product.price}
          <span style={{ 
            marginLeft: '10px', 
            color: product.inStock ? 'green' : 'red' 
          }}>
            {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
          </span>

                </div>
            ))}

        </div>
    </>
  )
}