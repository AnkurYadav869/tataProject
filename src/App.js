import Header from './Component/Header';
import Carousel from './Component/Carousel/Carousel';
import './App.css';
import SystemContainer from './Component/SystemContainer';

import Panel from './Container/Panel';

const App = () => {
	return (
		<div>
			<Header />
			<Carousel />
			<SystemContainer />
			<Panel />
		</div>
	);
};

export default App;
