import React from 'react';

function ProductRow(props) {
  return (
    <>
      <tr>
        {props.filterProducts.inStock ? (
          <td>{props.filterProducts.name}</td>
        ) : (
          <td style={{ color: 'red' }}>{props.filterProducts.name}</td>
        )}
        <td>{props.filterProducts.price}</td>
      </tr>
    </>
  );
}

export default ProductRow;
