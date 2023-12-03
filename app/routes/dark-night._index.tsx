import cx from 'classnames';

import { randomIntInRange } from '~/helpers/math';

export default function DarkNight() {
  const DIMENSIONS = [
    'h-px w-px',
    'h-0.5 w-0.5',
    'h-1 w-1',
    'h-2 w-2',
    'h-2.5 w-2.5',
    'h-3 w-3',
    'h-3.5 w-3.5',
  ];
  const COLORS = ['bg-cyan-900', 'bg-emerald-50', 'bg-rose-300'];
  const LIGHTS_COUNT = 335;
  return (
    <div className='w-screen h-screen bg-slate-950 flex justify-center items-center flex-col'>
      <div className='flex flex-wrap flex-row h-48 w-48 rounded-full opacity-50 items-center justify-center'>
        {Array.from(Array(LIGHTS_COUNT)).map((_x, i) => {
          const dimensionsIndex = randomIntInRange(0, DIMENSIONS.length - 1);
          const colorsIndex = randomIntInRange(0, COLORS.length - 1);
          return (
            <div
              key={i}
              className={cx(
                'animate-pulse rounded-full',
                DIMENSIONS[dimensionsIndex],
                COLORS[colorsIndex]
              )}
            />
          );
        })}
      </div>
      <p className='fixed bottom-4 text-emerald-50 italic opacity-80'>
        "Pain is knowledge rushing in to fill a void." - Jerry Seinfeld
      </p>
    </div>
  );
}
