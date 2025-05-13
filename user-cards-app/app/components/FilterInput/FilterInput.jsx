'use strict';
import React from 'react';
import styles from './FilterInput.scss';

/**
 * @param {object} props
 * @param {string} props.value
 * @param {(value: string) => void} props.onChange
 * @param {string} [props.placeholder]
 */
const FilterInput = ({ value, onChange, placeholder = "User Filter..." }) => {
  return (
    <div className="filter-container">
      <input
        type="text"
        className="filter-input "
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FilterInput;