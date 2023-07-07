import { ReactNode } from 'react';
import { useRouter } from '../hook/useRouter';

interface RouteProps {
	path: string;
	component: ReactNode;
}
const Route = ({ path, component }: RouteProps) => {
	const { currentPath } = useRouter();
	return currentPath === path ? component : null;
};

export default Route;
