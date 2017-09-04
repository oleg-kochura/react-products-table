import React, { Component } from 'react';
import { connect }            from 'react-redux';
import { onSortingByName, onSortingByRating, onSortingByPrice } from '../actions';
import { filteredProducts } from '../selectors';
import Table from '../components/Table';


class TableContainer extends Component {

  sorting = (key) => {
    switch (key) {
      case 'name':
        this.props.onSortingByName();
        break;
      case 'rating':
        this.props.onSortingByRating();
        break;
      case 'price':
        this.props.onSortingByPrice();
        break;
    }
  };

  render() {
    const { products, sortBy } = this.props;
    return (
      <Table products={products}
             onSorting={this.sorting}
             sortByOrder={sortBy} />
    )
  }
}


const mapStateToProps = state => ({
  sortBy: state.products.sortBy,
  products: state.filter.selected.length ? filteredProducts(state) : state.products.data
});

export default connect(mapStateToProps, {
  onSortingByName,
  onSortingByRating,
  onSortingByPrice
})(TableContainer);

