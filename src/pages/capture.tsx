import Head from 'next/head';
import { WebcamCapture } from '../components/WebcamCapture';

export default function Capture() {
	return (
		<>
			<Head>
				<title>Capture</title>
			</Head>

			<main>
				<WebcamCapture />
			</main>
		</>
	);
}
