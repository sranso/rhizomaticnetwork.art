import { useState, useEffect, useRef } from 'react';

// https://github.com/sranso/clock-circles/blob/master/clock.js

const styles = {
  fill: {
    am: 'rgba(255, 183, 0, 0.75)',
    pm: 'rgba(53, 126, 221, 0.75)',
    alarm: 'rgba(213, 0, 143, 0.65)',
  },
  stroke: {
    am: 'rgba(255, 222, 55, 0.90)',
    pm: 'rgba(150, 204, 255, 0.90)',
    alarm: 'rgba(255, 128, 204, 0.90)',
  },
};
const SPACE_FOR_TIME_AND_ALARM = 250;
const CENTER_PADDING = 1;
const HOURS_RADIUS_MIN = 120 + CENTER_PADDING;
const MINUTES_RADIUS_MIN = 60 + CENTER_PADDING;
const SECONDS_RADIUS_MIN = 0 + CENTER_PADDING;

const hoursRadius = (hours: number) => hours + HOURS_RADIUS_MIN;
const minutesRadius = (minutes: number) => minutes + MINUTES_RADIUS_MIN;
const secondsRadius = (seconds: number) => seconds + SECONDS_RADIUS_MIN;

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      let ctx = canvasCtxRef.current; // Assigning to a temp variable

      const heightAndWidth =
        Math.min(window.innerHeight, window.innerWidth) -
        SPACE_FOR_TIME_AND_ALARM;
      canvasRef.current.width = heightAndWidth;
      canvasRef.current.height = heightAndWidth;

      [
        hoursRadius(time.getHours()),
        minutesRadius(time.getMinutes()),
        secondsRadius(time.getSeconds()),
      ].forEach((radius) => {
        if (!canvasRef.current) return;
        const center = canvasRef.current.height / 2;
        const color = 'am';
        const fillStyle = styles.fill[color];
        const strokeStyle = styles.stroke[color];

        // ctx!.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctx!.beginPath();
        ctx!.arc(center, center, radius, 0, Math.PI * 2, true);
        ctx!.fillStyle = fillStyle;
        ctx!.fill();
        ctx!.lineWidth = 1;
        ctx!.strokeStyle = strokeStyle;
        ctx!.stroke();
      });
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <canvas id='canvas' width='1000' height='1000' ref={canvasRef}></canvas>
      <div id='current-time'>{time.toLocaleTimeString()}</div>
      <input id='alarm' type='time'></input>
    </>
  );
}
