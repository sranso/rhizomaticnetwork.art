import { useState, useEffect, useRef } from 'react';
import cx from 'classnames';

// https://github.com/sranso/clock-circles/blob/master/clock.js
const OPACITY = [0.25, 0.5, 1];
const STYLES = {
  fill: {
    am: (i: number) => `rgba(253, 164, 175, ${OPACITY[i]})`,
    pm: (i: number) => `rgba(22, 78, 99, ${OPACITY[i]})`,
    alarm: 'rgba(213, 0, 143, 0.65)',
  },
  stroke: {
    am: 'rgba(136, 19, 55, 0.90)',
    pm: 'rgba(8, 51, 68, 0.90)',
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
const amPm = (hours: number) => (hours > 11 && hours < 24 ? 'pm' : 'am');

export default function GrowingInTime() {
  const [time, setTime] = useState(new Date());
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  const draw = (ctx: CanvasRenderingContext2D | null) => {
    if (!ctx) return;
    const hours = time.getHours();
    const amOrPm = amPm(hours);
    [
      hoursRadius(hours),
      minutesRadius(time.getMinutes()),
      secondsRadius(time.getSeconds()),
    ].forEach((radius, i) => {
      if (!canvasRef.current) return;
      const center = canvasRef.current.height / 2;

      ctx!.beginPath();
      ctx!.arc(center, center, radius, 0, Math.PI * 2, true);
      ctx!.fillStyle = STYLES.fill[amOrPm](i);
      ctx!.fill();
      ctx!.lineWidth = 2;
      ctx!.strokeStyle = STYLES.stroke[amOrPm];
      ctx!.stroke();
    });
  };

  useEffect(() => {
    const timeInterval = setInterval(() => setTime(new Date()), 1000);
    const drawInterval = setInterval(draw, 1000);

    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      let ctx = canvasCtxRef.current; // Assigning to a temp variable

      // TODO
      // - fix resolution
      //  https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas
      // - scale to page

      // Get the DPR and size of the canvas
      const dpr = window.devicePixelRatio;
      const rect = canvasRef.current.getBoundingClientRect();

      // Set the "actual" size of the canvas
      canvasRef.current.width = rect.width * dpr;
      canvasRef.current.height = rect.height * dpr;

      // Scale the context to ensure correct drawing operations
      ctx!.scale(dpr, dpr);

      // Set the "drawn" size of the canvas
      // canvasRef.current.width = `${rect.width}px`;
      // canvasRef.current.height = `${rect.height}px`;
      // END TODO

      const heightAndWidth =
        Math.min(window.innerHeight, window.innerWidth) -
        SPACE_FOR_TIME_AND_ALARM;
      canvasRef.current.width = heightAndWidth;
      canvasRef.current.height = heightAndWidth;
      draw(ctx);
    }

    return () => {
      clearInterval(timeInterval);
      clearInterval(drawInterval);
    };
  }, [time]);

  return (
    <div
      className={cx('flex justify-center flex-col text-center', {
        'bg-amber-900 text-emerald-50': amPm(time.getHours()) === 'pm',
        'bg-orange-100 text-emerald-950': amPm(time.getHours()) === 'am',
      })}
    >
      <q className='pt-6'>
        a rhizome has no beginning or end; it is always in the middle,
        <br />
        between things, interbeing, intermezzo.
      </q>
      <canvas id='canvas' width='600' height='600' ref={canvasRef}></canvas>
      {/* <div id='current-time'>{time.toLocaleTimeString()}</div> */}
      {/* <input id='alarm' type='time'></input> */}
    </div>
  );
}
