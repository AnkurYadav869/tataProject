import React from 'react';

function CarouselItem({ children, cl }) {
	return <div className={cl}>{children}</div>;
}

export default CarouselItem;
