import { createContext } from 'react';

export type RouterContextValue = {
	currentPath: string;
	changePath: (path: string) => void;
};

export const RouterContext = createContext<RouterContextValue>({ currentPath: '', changePath: () => {} });
