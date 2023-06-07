import React, { useState } from 'react'
import Star from './Star';

const StarRating = () => {
	const [rating, setRating] = useState(0);

	const handleClick = (selected) => {
		setRating(selected);
	};

	return (
		<div className='rating-wrapper'>
			<div className='star-ratings'>
				{/* underscore is a convention to denote an unused variable */}
				{[...Array(5)].map((_, index) => {
					return <Star
						key={index}
						isSelected={index < rating}
						onClick={() => handleClick(index + 1)}
					/>
				})}
			</div>
		</div>
	)
}

export default StarRating