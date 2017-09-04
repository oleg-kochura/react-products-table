import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { onActivateFilter, onDeactivateFilter }  from '../actions';
import FilterList  from '../components/FilterList';


class FilterContainer extends Component {

  handleCheckboxChange = ({name, checked}) => {
    checked
      ? this.props.onActivateFilter(name)
      : this.props.onDeactivateFilter(name)
  };

  render() {
    return <FilterList items={this.props.available}
                       onChange={this.handleCheckboxChange}/>
  }
}

const mapStateToProps = ({filter}) => ({available: filter.available});

export default connect(mapStateToProps, {
  onActivateFilter,
  onDeactivateFilter
})(FilterContainer);
