import { useEffect, useRef, useState } from "react"
import QRCode from 'qrcode';

export default function GenerateQRCode({text}: {text: string}): JSX.Element {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [error, setError] = useState<null | Error>(null);
    useEffect(() => {
        QRCode.toCanvas(canvasRef.current, text, {
            width: 225,
            margin: 0
        }, function(error) {
            setError(error);
        })
    }, [text])
    return !error ? <canvas ref={canvasRef}></canvas> : <p className="text-red-500">Something went wrong! Try logging in manually.</p>
}