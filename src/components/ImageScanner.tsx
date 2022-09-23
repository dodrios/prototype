import Image from 'next/future/image';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';

const worker = createWorker({
	logger: m => console.log(m),
});

export function ImageScanner() {
	const router = useRouter();
	const [ocr, setOcr] = useState('Recognizing...');
	const [capturedImage, setCapturedImage] = useState<string>('');

	const doOcr = useCallback(async () => {
		await worker.load();
		await worker.loadLanguage('eng');
		await worker.initialize('eng');
		const {
			data: { text },
		} = await worker.recognize(capturedImage);
		setOcr(text);
	}, [capturedImage]);

	useEffect(() => {
		const img = localStorage.getItem('capturedImage');
		if (img) setCapturedImage(img);
		doOcr();
	}, [setCapturedImage, router, doOcr]);

	if (!capturedImage) return <>Loading...</>;

	return (
		<div className='grid grid-cols-1 justify-items-center gap-y-4'>
			<Image src={capturedImage} alt='captured image' height={720} width={1280} />
			<p>{ocr}</p>
		</div>
	);
}
