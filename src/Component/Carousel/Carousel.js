import React from 'react';
import Banner from './Banner';
import CarouselItem from './CarouselItem';
import Controls from './Controls';
import Box from '../../Container/Box';
import Showcase from '../../Container/Showcase';
const Carousel = () => {
	return (
		<Banner name='carouselExampleControls'>
			<div className='carousel-inner'>
				<CarouselItem cl='carousel-item active'>
					<div className='banner1'>
						<Showcase>
							<Box clName='w-75 p-3 cl-o p-relative text-white'>
								<h1>Increase Bottom Line</h1>
								<p className='lead'>
									Invest in Solar Rooftops, profit from clean energy, save tax &
									get superior returns than any other investment option
								</p>
							</Box>
						</Showcase>
					</div>
				</CarouselItem>
				<CarouselItem cl='carousel-item'>
					<div className='banner2'>
						<div className='showcase'>
							<Box clName='w-75 p-3 cl-o p-relative text-white'>
								<h1>Profit from Clean Energy</h1>
								<p className='lead'>
									Solar panels generate clean and green power from the planet’s
									most reliable and safest energy source—the sun
								</p>
							</Box>
						</div>
					</div>
				</CarouselItem>
				<CarouselItem cl='carousel-item'>
					<div className='banner3'>
						<div className='showcase'>
							<Box clName='w-75 p-3 cl-o p-relative text-white'>
								<h1>Improve Building Life</h1>
								<p className='lead'>
									Reduce HVAC costs, Solar panels add a protective layer to your
									roof
								</p>
							</Box>
						</div>
					</div>
				</CarouselItem>
			</div>
			<Controls
				indicator='prev'
				icon='Previous'
				link='#carouselExampleControls'
			/>
			<Controls indicator='next' icon='Next' link='#carouselExampleControls' />
		</Banner>
	);
};

export default Carousel;
