import { useRouter } from '../hook/useRouter';
function Root() {
	const { push } = useRouter();
	return (
		<div>
			<h1>Home</h1>
			<button onClick={() => push('/about')}>About으로 가기</button>
		</div>
	);
}

export default Root;
