import Logo1 from '../Image/tata-logo.png';
import Logo2 from '../Image/tata-solar-logo.png';

const Header = () => {
	return (
		<div className='flex-between w-90 pt-1 fixed'>
			<div>
				<a href='/'>
					<img src={Logo2} alt='' />
				</a>
			</div>
			<div>
				<img src={Logo1} alt='' />
			</div>
		</div>
	);
};
export default Header;
