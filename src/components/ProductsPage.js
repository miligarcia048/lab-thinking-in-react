import { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import data from '../data.json';

function ProductsPage() {
  const [products, setProducts] = useState(data);

  function handleSearch() {}
  return (
    <div>
      <h1>IronStore</h1>

      <SearchBar handleSearch={handleSearch} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
