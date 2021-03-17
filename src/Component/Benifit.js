import React from 'react';

function Benifit({ img, text }) {
	return (
		<div className='col-6 col-md-2'>
			<img src={img} alt='' />
			<p>{text}</p>
		</div>
	);
}

export default Benifit;
