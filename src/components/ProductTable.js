import React from 'react';
import ProductRow from '../ProductRow';

function ProductTable(props) {
  const { filterProducts } = props;

  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {filterProducts.map((filterProducts) => {
          return (
            <ProductRow
              filterProducts={filterProducts}
              key={filterProducts.id}
            />
          );
        })}
      </table>
    </>
  );
}

export default ProductTable;
