type UseRouterReturnType = {
	push: (path: string) => void;
};

export const useRouter = (): UseRouterReturnType => {
	const push = (path: string) => {
		window.history.pushState(null, '', path); // pushState 메소드는 popState 이벤트를 발생시키지 않으므로
		const event = new PopStateEvent('popstate'); // 이벤트 객체를 생성하여
		dispatchEvent(event); // dispatchEvent를 이용해 이벤트를 실행시켜준다.
	};

	return { push };
};
