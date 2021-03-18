import React from 'react';
import img1 from '../Image/Smart/rooftop6.png';
import img2 from '../Image/Smart/rooftop7.png';
import img4 from '../Image/Smart/rooftop8.png';
import img3 from '../Image/Smart/rooftop10.png';
import Card from './Card';
import Heading from './Heading';
function Smart() {
	return (
		<div className=' container'>
			<Heading text='Smart Monitoring and Sensing' />
			<div className='row align-items-center'>
				<div className='col-sm-6'>
					<Card
						img={img1}
						text='SOLAR ROOFTOPS - ISRO: 3060 KW SOLAR ROOFTOP INSTALLATION'
					/>
				</div>
				<div className='col-sm-6'>
					<Card
						img={img2}
						text='SOLAR ROOFTOPS – KALINGA INSTITUTE OF SOCIAL SCIENCES University: 500 KW SOLAR ROOFTOP INSTALLATION
            '
					/>
				</div>
			</div>
			<Heading text='SOLAR ROOFTOPS – Corporate Buildings' />
			<div className='row align-items-center'>
				<div className='col-sm-6'>
					<Card img={img3} />
				</div>
				<div className='col-sm-6'>
					<Card img={img4} />
				</div>
			</div>
		</div>
	);
}

export default Smart;
