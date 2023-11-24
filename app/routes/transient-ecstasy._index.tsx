import { useState, useEffect } from 'react';
import { Tooltip } from '@mui/material';

export default function TransientEcstasy() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className='bg-cyan-950 flex flex-col text-center justify-center text-emerald-50 h-screen w-screen'>
      <Tooltip
        placement='top'
        title='To the mind which lets go and moves with the flow of change, the sense of transience or emptiness becomes a kind of ecstasy'
        classes={{
          tooltip: '!bg-transparent !text-blue-500 text-center',
          popper: 'bg-emerald-50',
          touch: '!bg-transparent !text-blue-500 text-center',
        }}
      >
        <h1 className='text-4xl mb-4'>{`${time.toLocaleTimeString()}`}</h1>
      </Tooltip>
      <p>
        Tomorrow, and tomorrow, and tomorrow,
        <br />
        Creeps in this petty pace from day to day
        <br />
        To the last syllable of recorded time,
        <br />
        And all our yesterdays have lighted fools
        <br />
        The way to dusty death. Out, out brief, brief candle!
        <br />
        Life's but a walking shadow, a poor player
        <br />
        That struts and frets his hour upon the stage
        <br />
        And then is heard no more; it is a tale
        <br />
        Told by an idiot, full of sound and fury,
        <br />
        Signifying nothing.
        <br />
        R. H. Blyth
      </p>
    </div>
  );
}
