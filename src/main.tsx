import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './component/About.tsx';
import Root from './component/Root.tsx';
import Route from './component/Route.tsx';
import Router from './component/Router.tsx';
import './index.css';
import Routes from './component/Routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path='/' component={<Root />} />
				<Route path='/about' component={<About />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
