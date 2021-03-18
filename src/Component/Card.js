import React from 'react';

function Card({ img, text }) {
	return (
		<div class='card zoom m-4 shadow-lg'>
			<div className='p-3'>
				<img src={img} class='card-img-top' alt='...' />
			</div>
			<div class='card-head p-3'>
				<p class=' lead card-text text-secondary'>{text}</p>
			</div>
		</div>
	);
}

export default Card;
