import React from 'react';
import ProductRow from '../ProductRow';

function ProductTable(props) {
  const { products } = props;

  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {products.map((products) => {
          return <ProductRow products={products} key={products.id} />;
        })}
      </table>
    </>
  );
}

export default ProductTable;
