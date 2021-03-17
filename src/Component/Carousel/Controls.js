import React from 'react';

function Controls({ indicator, icon, link }) {
	return (
		<a
			className={'carousel-control-' + indicator}
			href={link}
			role='button'
			data-slide={indicator}
		>
			<span
				className={'carousel-control-' + indicator + '-icon'}
				aria-hidden='true'
			></span>
			<span className='sr-only'>{icon}</span>
		</a>
	);
}

export default Controls;
