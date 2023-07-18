import { ReactNode, useContext } from 'react';
import { RouterContext } from '../context/routerContext';

interface RouteProps {
	path: string;
	component: ReactNode;
}
const Route = ({ path, component }: RouteProps) => {
	const { currentPath } = useContext(RouterContext)!;
	return currentPath === path ? component : null;
};

export default Route;
