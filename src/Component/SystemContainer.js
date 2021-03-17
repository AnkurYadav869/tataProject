import React from 'react';
import img from '../Image/roof-top-solar.jpg';

const SystemContainer = () => {
	return (
		<div className='container my-5'>
			<div className='row'>
				<div className='col-md-6'>
					<img src={img} alt='' className='img-res' />
				</div>
				<div className='col-md-6'>
					<div className='p-5'>
						<h5>What is Solar Rooftop?</h5>
						<h2 className='text-primary'>HOW DOES ROOFTOP SYSTEM WORK?</h2>
						<p className='lead text-justify'>
							A solar rooftop system typically consists of solar modules, solar
							inverter(s) and other electrical components such as meter(s),
							cables etc. Any excess electricity generated is exported to the
							national electricity grid and owner's account is credited
							accordingly, subject to prevailing regulatory policies.
						</p>
						<a href='/' className='btn btn-outline-warning'>
							Know More
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SystemContainer;
