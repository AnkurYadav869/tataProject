import React from 'react';
import img from '../Image/roof-top-solar.jpg';

const SystemContainer = () => {
	return (
		<div className='container my-5'>
			<div className='row align-items-center'>
				<div className='col-md-4'>
					<img src={img} alt='' className='img-res' />
				</div>
				<div className='col-md-8'>
					<div
						className='p-2 wow FadeInUp'
						style={{ animationDelay: '1s', animationName: 'FadeInUp' }}
					>
						<h5>What is Solar Rooftop?</h5>
						<h2 className='text-primary'>HOW DOES ROOFTOP SYSTEM WORK?</h2>
						<p className='text-justify'>
							Convert unused rooftop space into productive solar rooftop power
							plant and generate solar power Connect to your existing
							electricity bus, no internal wiring changes required Consume all
							solar power generated instantly, no battery back-up required Will
							work even during diesel generator usage Save and reduce your
							electricity bill every month with the amount of solar power
							generated set-off Continuous savings from present high utility and
							diesel power prices Future savings from year-on-year increases in
							utility and diesel power prices
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
