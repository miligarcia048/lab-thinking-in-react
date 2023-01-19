import React from 'react';

function ProductRow(props) {
  return (
    <>
      <tr>
        {props.products.inStock ? (
          <td>{props.products.name}</td>
        ) : (
          <td style={{ color: 'red' }}>{props.products.name}</td>
        )}
        <td>{props.products.price}</td>
      </tr>
    </>
  );
}

export default ProductRow;
