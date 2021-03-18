import React from 'react';
import img1 from '../Image/net_metering-01.jpg';
import img2 from '../Image/net_metering-02.jpg';
import img3 from '../Image/rooftop5.png';
function NetMetering() {
	return (
		<div className='container my-5'>
			<h2 className='text-primary'>SOLAR ROOFTOPS net metering</h2>
			<div className='row my-5'>
				<div className='col-sm-6'>
					<img src={img1} className='img-res' alt='' />
				</div>
				<div className='col-sm-6'>
					<img src={img2} className='img-res' alt='' />
				</div>
			</div>
			<div className='w-75 mx-auto'>
				<img src={img3} className='img-res' alt='' />
			</div>
		</div>
	);
}

export default NetMetering;
