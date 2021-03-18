import React from 'react';

function Heading({ text }) {
	return (
		<div>
			<h2 className='text-primary my-5 text-center'>
				<u>{text}</u>
			</h2>
		</div>
	);
}

export default Heading;
