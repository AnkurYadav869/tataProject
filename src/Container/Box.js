import React from 'react';

const Box = ({ children, clName }) => {
	return <div className={clName}>{children}</div>;
};
export default Box;
