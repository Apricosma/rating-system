import React, { useState } from 'react'
import Star from './Star';

const StarRating = () => {
	const [rating, setRating] = useState(0);

	const handleClick = (selected) => {
		if (selected === rating) {
			setRating(0);
			return;
		}

		setRating(selected);
	};

	const ratingText = ['Lacking', 'Okay', 'Good', 'Great', 'Excellent!'];

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

			<h2 className='rating-text'>
				{rating === 0 ? 'Please rate this service' : ratingText[rating - 1]} 
			</h2>
		</div>
	)
}

export default StarRating