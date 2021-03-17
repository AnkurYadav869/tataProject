import React from 'react';
import Box from './Box';
import Benifit from '../Component/Benifit';
import benifit1 from '../Image/Benifits/benefits-01.png';
import benifit2 from '../Image/Benifits/benefits-02.png';
import benifit3 from '../Image/Benifits/benefits-03.png';
import benifit4 from '../Image/Benifits/benefits-04.png';
import benifit5 from '../Image/Benifits/benefits-05.png';
import benifit6 from '../Image/Benifits/benefits-06.png';
function Panel() {
	return (
		<div className='panel'>
			{' '}
			<div className='showcase'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-sm-4 d-none d-sm-block'></div>
						<div className='col-sm-10'>
							<Box clName='bg-o text-white p-3 my-5'>
								<h5>Why go Solar?</h5>
								<h2 className='text-white'>BENEFITS OF GOING SOLAR</h2>
								<p className='lead text-justify'>
									Solar solutions installed on your roof or ground are ideal for
									harnessing the sun’s energy. Not only do they save electricity
									costs, but also help you fulfill you role as a responsible
									citizen by contributing positively to the environment.
								</p>
								<div className='row text-center'>
									<Benifit
										img={benifit1}
										text='Up to 80%+ electricity bill savings'
									/>
									<Benifit
										img={benifit2}
										text='Up to 80%+ electricity bill savings'
									/>
									<Benifit
										img={benifit3}
										text='Up to 80%+ electricity bill savings'
									/>
									<Benifit
										img={benifit4}
										text='Up to 80%+ electricity bill savings'
									/>
									<Benifit
										img={benifit5}
										text='Up to 80%+ electricity bill savings'
									/>
									<Benifit
										img={benifit6}
										text='Up to 80%+ electricity bill savings'
									/>
								</div>

								<a href='/' className='btn btn-outline-light pt-2 '>
									Know More
								</a>
							</Box>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Panel;
