import React from 'react';
import cssModules from 'react-css-modules';
import styles from '../styles/filterList.scss';


const Checkbox = ({filter, onChange}) => (
  <div className="custom-controls-stacked">
    <label className="custom-control custom-checkbox">
      <input type="checkbox"
             name={filter.type}
             className="custom-control-input"
             onChange={(e) => onChange(e.target)}/>
      <span className="custom-control-indicator"></span>
      <span className="custom-control-description">{filter.name}</span>
    </label>
  </div>
);


const FilterList = ({items, onChange}) => (
  <form styleName="filters-form">
    {items.map(filter =>
      <Checkbox key={filter.name} filter={filter} onChange={onChange}/>)}
  </form>
);

export default cssModules(FilterList, styles, { allowMultiple: true });
