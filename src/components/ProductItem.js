import React from 'react';
import ReactStars from 'react-stars'

const ProductItem = ({product}) => (
  <tr>
    <th scope="row"><input type="checkbox"/></th>
    <td>{product.name}</td>
    <td>
      <ReactStars
        count={5}
        size={20}
        edit={false}
        value={product.rating}
        color2={'#ffd700'}/>

    </td>
    <td>{product.price}</td>
  </tr>
);

export default ProductItem;
