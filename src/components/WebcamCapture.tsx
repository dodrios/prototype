import { useRouter } from 'next/router';
import { useCallback, useRef } from 'react';
import Webcam from 'react-webcam';

const videoConstraints: MediaTrackConstraints = {
	width: 1280,
	height: 720,
	facingMode: 'environment',
};

export function WebcamCapture() {
	const router = useRouter();
	const webcamRef = useRef<Webcam | null>(null);
	const capture = useCallback(() => {
		if (webcamRef.current) {
			const imgDataUri = webcamRef.current.getScreenshot();
			console.log(imgDataUri);
			if (imgDataUri) {
				localStorage.setItem('capturedImage', imgDataUri);
				router.push('/scan');
			}
		}
	}, [webcamRef, router]);

	return (
		<div className='grid grid-cols-1 justify-items-center gap-y-4'>
			<Webcam
				height={720}
				width={1280}
				audio={false}
				ref={webcamRef}
				mirrored={false}
				screenshotFormat='image/jpeg'
				screenshotQuality={1}
				videoConstraints={videoConstraints}
			/>
			<button type='button' className='rounded-md bg-red-500 py-2 px-4 text-white shadow-md' onClick={capture}>
				Capture
			</button>
		</div>
	);
}
