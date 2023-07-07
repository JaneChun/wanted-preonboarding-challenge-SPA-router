import { useRouter } from '../hook/useRouter';
function About() {
	const { push } = useRouter();
	return (
		<div>
			<h1>About</h1>
			<button onClick={() => push('/')}>Home으로 가기</button>
		</div>
	);
}

export default About;
