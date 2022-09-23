import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>

			<main className='grid min-h-screen grid-cols-1 items-center justify-items-center'>
				<Link href={'/capture'}>
					<a className='rounded-md bg-blue-400 py-2 px-4 text-white shadow-md'>Open Camera</a>
				</Link>
			</main>
		</>
	);
}
