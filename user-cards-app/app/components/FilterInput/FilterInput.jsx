'use strict';
import React from 'react';
import './FilterInput.scss';

/** //Component of the input field for filtering.
 * @param {object} props //Component props.
 * @param {string} props.value //The current value of the field.
 * @param {(value: string) => void} props.onChange //Function-handler for changing the value.
 * @param {string} [props.placeholder] //Placeholder text for the field.
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