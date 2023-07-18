import { ReactNode, isValidElement, useContext } from 'react';
import { RouterContext } from '../context/routerContext';

interface RoutesProps {
	children: ReactNode;
}

function Routes({ children }: RoutesProps) {
	const { currentPath } = useContext(RouterContext);

	const childrenArr = Array.isArray(children) ? children : [children];

	const isCorrespondComponent = (component: ReactNode) => {
		if (!isValidElement(component)) return false;

		return component.props.path === currentPath; // path가 일치하면 true, 일치하지 않으면 false 리턴
	};

	return <>{childrenArr.find(isCorrespondComponent)}</>;
}

export default Routes;
