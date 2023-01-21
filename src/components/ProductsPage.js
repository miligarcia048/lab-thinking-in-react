import { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import data from '../data.json';

function ProductsPage() {
  const [products, setProducts] = useState(data);
  const [filterProducts, setFilterProducts] = useState(data);

  function handleSearch(keyword) {
    var filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().startsWith(keyword);
    });
    setFilterProducts(filteredProducts);
  }

  return (
    <div>
      <h1>IronStore</h1>

      <SearchBar handleSearch={handleSearch} />
      <ProductTable filterProducts={filterProducts} />
    </div>
  );
}

export default ProductsPage;
