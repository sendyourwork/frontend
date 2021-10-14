import { useEffect, useRef, useState } from "react"
import QRCode from 'qrcode';

interface GenerateQRCodeProps {
    text: string,
}
export default function GenerateQRCode({ text }: GenerateQRCodeProps): JSX.Element {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [error, setError] = useState<null | Error>(null);
    useEffect(() => {
        QRCode.toCanvas(canvasRef.current, text, {
            width: 250,
            margin: 0
        }, function (error) {
            setError(error);
        })
    }, [text])
    return !error ? <canvas ref={canvasRef} className="mb-5 h-auto block"></canvas> : <p className="text-red-500">Something went wrong! Try logging in manually.</p>
}