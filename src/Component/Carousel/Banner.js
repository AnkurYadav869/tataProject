import React from 'react';

const Banner = ({ children, name }) => {
	return (
		<div id={name} className='carousel slide' data-ride='carousel'>
			{children}
		</div>
	);
};
export default Banner;
