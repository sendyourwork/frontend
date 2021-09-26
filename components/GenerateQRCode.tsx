import { useEffect, useRef } from "react"
import QRCode from 'qrcode';

export default function GenerateQRCode({text}: {text: string}): JSX.Element {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        QRCode.toCanvas(canvasRef.current, text, {
            width: 232,
            margin: 1
        }, function(error) {
            console.log("Something went wrong");
            
        })
    }, [text])
    return <canvas ref={canvasRef}></canvas>
}