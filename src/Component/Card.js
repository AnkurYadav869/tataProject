import React from 'react';

function Card({ img, text }) {
	return (
		<div className='card zoom m-4 shadow-lg'>
			<div className='p-3'>
				<img src={img} className='card-img-top' alt='...' />
			</div>
			<div className='card-head p-3'>
				<p className=' lead card-text text-secondary'>{text}</p>
			</div>
		</div>
	);
}

export default Card;
