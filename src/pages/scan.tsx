import Head from 'next/head';
import { ImageScanner } from '../components/ImageScanner';

export default function Scan() {
	return (
		<>
			<Head>
				<title>Scan</title>
			</Head>

			<main>
				<ImageScanner />
			</main>
		</>
	);
}
