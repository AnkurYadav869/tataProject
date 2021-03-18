import React from 'react';

function Foot() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-2 my-3'>
					<b className='h4 text-white'>Company</b> <br />
					<a href='http://photonsolar.in/aboutus.php' className='text-dark'>
						<br />
						About Us
					</a>
					<a href='http://photonsolar.in/vision.php' className='text-dark'>
						<br />
						Vision and Mission
					</a>
					<a href='http://photonsolar.in/quality.php' className='text-dark'>
						<br />
						Quality
					</a>
				</div>
				<div className='col-sm-2 my-3'>
					<b className='h4 text-white'>PV Products</b>
					<br />
					<a href='' className='text-dark'>
						<br />
						PV Modules
					</a>
					<a href='' className='text-dark'>
						<br />
						Solar Smart Systems
					</a>
				</div>
				<div className='col-md-2 my-3'>
					<b className='h4 text-white'>Solar Thermal</b> <br />
					<a href='' className='text-dark'>
						{' '}
						<br />
						Flat Plate Collectors
					</a>
					<a href='' className='text-dark'>
						{' '}
						<br />
						Evacuated Tube Collectors
					</a>
					<a href='' className='text-dark'>
						{' '}
						<br />
						Industrial Heating
					</a>
					<a href='' className='text-dark'>
						{' '}
						<br />
						Solar Desalination
					</a>
				</div>
				<div className='col-md-3 my-3'>
					<b className='h4 text-white'>Solutions</b>
					<br />
					<a href='' className='text-dark'>
						<br />
						Solar Rooftops
					</a>

					<a href='' className='text-dark'>
						<br />
						Megawatt Power Plants
					</a>
					<a href='' className='text-dark'>
						<br />
						Photon Trackers
					</a>
				</div>
				<div className='col-md-3 my-3'>
					<b className='h4 text-white'>Contact US</b> <br />
					<a href='' className='text-dark'>
						<br />
						Contact Form
					</a>
					<a href='' className='text-dark'>
						<br />
						New Dealership
					</a>
					<a href='' className='text-dark'>
						<br />
						Complaint Form
					</a>
					<a href='' className='text-dark'>
						<br />
						Marketing and Dealers Network
					</a>
					<a href='' className='text-dark'>
						<br />
						Sitemap
					</a>
				</div>
			</div>
		</div>
	);
}

export default Foot;
