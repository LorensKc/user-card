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
    <div className={styles.filterContainer}>
      <input
        type="text"
        className={styles.filterInput}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FilterInput;