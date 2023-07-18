import { ReactNode, useState, useEffect } from 'react';
import { RouterContext, RouterContextValue } from '../context/routerContext';

type RouterProps = {
	children: ReactNode;
};

function Router({ children }: RouterProps) {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	const changePath = (path: string) => {
		window.history.pushState(null, '', path);
		setCurrentPath(path);
	};

	useEffect(() => {
		const handleUrlChange = () => {
			setCurrentPath(window.location.pathname);
		};

		window.addEventListener('popstate', handleUrlChange);

		return () => {
			window.removeEventListener('popstate', handleUrlChange);
		};
	}, []);

	const contextValue: RouterContextValue = { currentPath, changePath };

	return <RouterContext.Provider value={contextValue}>{children}</RouterContext.Provider>;
}

export default Router;
