import cx from 'classnames';

function randomIntInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
  const COLORS = ['bg-cyan-900', 'bg-emerald-50'];
  return (
    <div className='w-screen h-screen bg-sky-950 flex justify-center items-center flex-col'>
      <div className='flex flex-wrap flex-row h-48 w-48 rounded-full opacity-50'>
        {Array.from(Array(335)).map((_x, i) => {
          const dimensionsIndex = randomIntInRange(0, DIMENSIONS.length);
          const colorsIndex = randomIntInRange(0, COLORS.length);
          return (
            <div
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
