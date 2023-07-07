import { ReactNode } from 'react';

type RouterProps = {
	children: ReactNode;
};

function Router({ children }: RouterProps) {
	return children;
}

export default Router;
