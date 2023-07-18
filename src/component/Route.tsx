import { ReactNode } from 'react';

interface RouteProps {
	path: string;
	component: ReactNode;
}
const Route = ({ path, component }: RouteProps) => {
	return component;
};

export default Route;
