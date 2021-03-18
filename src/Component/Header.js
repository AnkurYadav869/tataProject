import Logo1 from '../Image/logo1.png';

const Header = () => {
	return (
		<div className='flex-between w-90 pt-1 fixed'>
			<div>
				<a href='/'>
					<img src={Logo1} alt='' />
				</a>
			</div>
			<div></div>
		</div>
	);
};
export default Header;
