import Header from './Component/Header';
import Carousel from './Component/Carousel/Carousel';
import './App.css';
import SystemContainer from './Component/SystemContainer';
import NetMetering from './Component/NetMetering';
import Panel from './Container/Panel';
import Smart from './Component/Smart';
import Footer from './Container/Footer';
import Foot from './Component/Foot';

const App = () => {
	return (
		<div>
			<Header />
			<Carousel />
			<SystemContainer />
			<Panel />
			<NetMetering />
			<Smart />
			<Footer>
				<Foot />
			</Footer>
		</div>
	);
};

export default App;
