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
								<h1 className='lead'>Lorem ipsum dolor sit.</h1>
								<h1>Lorem ipsum dolor sit amet consectetur</h1>
							</Box>
						</Showcase>
					</div>
				</CarouselItem>
				<CarouselItem cl='carousel-item'>
					<div className='banner2'>
						<div className='showcase'>
							<Box clName='w-75 p-3 cl-o p-relative text-white'>
								<h1 className='lead'>Lorem ipsum dolor sit.</h1>
								<h1>Lorem ipsum dolor sit amet consectetur</h1>
							</Box>
						</div>
					</div>
				</CarouselItem>
				<CarouselItem cl='carousel-item'>
					<div className='banner3'>
						<div className='showcase'>
							<Box clName='w-75 p-3 cl-o p-relative text-white'>
								<h1 className='lead'>Lorem ipsum dolor sit.</h1>
								<h1>Lorem ipsum dolor sit amet consectetur</h1>
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
