import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ isSelected, onClick }) => {
  return (
    <FaStar color={isSelected ? 'yellow' : 'gray'} onClick={onClick} />
  )
}

export default Star