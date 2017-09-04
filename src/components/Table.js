import React  from 'react';
import ProductItem from '../components/ProductItem';
import cssModules from 'react-css-modules';
import styles from '../styles/table.scss';


const sortBy = {
  name: 'name',
  rating: 'rating',
  price: 'price'
};

const Arrow = ({order}) => {
  if (order === '') return null;
  if(order === 'asc') return <span>↓</span>;
  if(order === 'desc') return <span>↑</span>;
};

const TableHeader = ({ onSorting, sortByOrder }) => (
  <thead className="thead-inverse">
    <tr>
      <th scope="row">
        <span>Check all</span>
      </th>
      <th onClick={(e) => onSorting(sortBy.name)}>
        Product name <Arrow order={sortByOrder.name}/>
      </th>
      <th onClick={(e) => onSorting(sortBy.rating)}>
        Rating <Arrow order={sortByOrder.rating}/>
      </th>
      <th onClick={(e) => onSorting(sortBy.price)}>
        Price <Arrow order={sortByOrder.price}/>
      </th>
    </tr>
  </thead>
);

const TableBody = ({ products }) => (
  <tbody>
  {products.map(product =>
    <ProductItem key={product.id} product={product}/>
  )}
  </tbody>
);


const Table = ({products, onSorting, sortByOrder }) => (
  <table className="table table-striped" styleName="custom-table">
    <TableHeader onSorting={onSorting}
                 sortByOrder={sortByOrder} />
    <TableBody products={products}/>
  </table>
);


export default cssModules(Table, styles, { allowMultiple: true });
