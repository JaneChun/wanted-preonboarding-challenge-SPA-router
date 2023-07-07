import { useEffect, useState } from 'react';

type UseRouterReturnType = {
	push: (path: string) => void;
	currentPath: string;
};

export const useRouter = (): UseRouterReturnType => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const handleUrlChange = () => {
			setCurrentPath(window.location.pathname);
		};

		window.addEventListener('popstate', handleUrlChange);

		return () => {
			window.removeEventListener('popstate', handleUrlChange);
		};
	}, []);

	const push = (path: string) => {
		window.history.pushState(null, '', path); // pushState 메소드는 popState 이벤트를 발생시키지 않으므로
		const event = new PopStateEvent('popstate'); // 이벤트 객체를 생성하여
		dispatchEvent(event); // dispatchEvent를 이용해 이벤트를 실행시켜준다.
	};

	return { push, currentPath };
};
