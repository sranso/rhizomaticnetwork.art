import cx from 'classnames';
import { Link } from '@remix-run/react';

export default function Start() {
  const LARGER_TRIANGLES = [
    { border: '15rem', borderBottom: '20rem', rotation: 'rotate-2' },
    { border: '12rem', borderBottom: '18rem', rotation: 'rotate-3' },
    { border: '10rem', borderBottom: '15rem', rotation: 'rotate-6' },
    { border: '5rem', borderBottom: '10rem', rotation: 'rotate-12' },
    { border: '2rem', borderBottom: '8rem', rotation: 'rotate-45' },
  ];
  const SMALLER_TRIANGLES = [
    { border: '6rem', borderBottom: '8rem', rotation: 'rotate-45' },
    { border: '5rem', borderBottom: '7rem', rotation: 'rotate-12' },
    { border: '4rem', borderBottom: '6rem', rotation: 'rotate-8' },
    { border: '3rem', borderBottom: '5rem', rotation: 'rotate-6' },
    { border: '2rem', borderBottom: '4rem', rotation: 'rotate-4' },
  ];
  return (
    <main className='relative'>
      <Link to='/wasp-and-orchid'>
        <img src='/wasp.jpg' className='w-screen opacity-5 absolute' />
      </Link>
      <div className='flex w-screen h-screen'>
        <div>
          <img src='/wasp.jpg' className='h-48 w-48' />
          <p className='w-52 m-2'>
            Thus the reliability of our decisions rests ultimately upon our
            ability to "feel" the situation, upon the degree to which this
            "peripheral vision" has been developed. Every exponent of the{' '}
            <i>I Ching</i> knows this.
            <br />– <i>The Way of Zen</i> by Alan Watts
          </p>
        </div>
        <div className='pl-4 z-10'>
          {[1, 2, 3, 4, 5].map((num, i) => {
            return (
              <div
                className={cx(
                  'bg-emerald-50 w-0 h-0 relative origin-center opacity-20',
                  LARGER_TRIANGLES[i].rotation
                )}
                style={{
                  border: `${LARGER_TRIANGLES[i].border} solid transparent`,
                  borderTop: '0',
                  borderBottom: `${LARGER_TRIANGLES[i].borderBottom} solid rgb(8, 51, 68)`,
                }}
              ></div>
            );
          })}
        </div>
        <div className='z-10 scale-75'>
          {[1, 2, 3, 4, 5].map((num, i) => {
            return (
              <>
                <img src='/wasp.jpg' className='h-48 w-48' />
                <div
                  className={cx(
                    'bg-emerald-50 w-0 h-0 relative origin-center opacity-50',
                    SMALLER_TRIANGLES[i].rotation
                  )}
                  style={{
                    border: `${SMALLER_TRIANGLES[i].border} solid transparent`,
                    borderTop: '0',
                    borderBottom: `${SMALLER_TRIANGLES[i].borderBottom} solid rgb(8, 51, 68)`,
                  }}
                ></div>
              </>
            );
          })}
        </div>
        <div className='fixed right-0 w-6/12 rotate-180 bottom-0'>
          {[1, 2, 3, 4, 5].map((num, i) => {
            return (
              <>
                <div
                  className={cx(
                    'bg-emerald-50 w-0 h-0 relative origin-center',
                    SMALLER_TRIANGLES[i].rotation,
                    {
                      'opacity-25': i === 2 || i === 5,
                    }
                  )}
                  style={{
                    border: `${SMALLER_TRIANGLES[i].border} solid transparent`,
                    borderTop: '0',
                    borderBottom: `${SMALLER_TRIANGLES[i].borderBottom} solid rgb(8, 51, 68)`,
                  }}
                ></div>
                <img src='/wasp.jpg' className='h-48 w-48' />
              </>
            );
          })}
        </div>
        <div className='fixed left-32 w-6/12 rotate-12 z-10 bottom-0 scale-50'>
          {[1, 2, 3, 4, 5].map((num, i) => {
            return (
              <div
                className={cx(
                  'bg-emerald-50 w-0 h-0 relative origin-center',
                  SMALLER_TRIANGLES[i].rotation
                )}
                style={{
                  border: `${SMALLER_TRIANGLES[i].border} solid transparent`,
                  borderTop: '0',
                  borderBottom: `${SMALLER_TRIANGLES[i].borderBottom} solid rgb(8, 51, 68)`,
                }}
              ></div>
            );
          })}
          <img src='/wasp.jpg' className='h-48 w-48 opacity-60' />
        </div>
        <Link to='/wasp-and-orchid'>
          <img
            src='/wasp.jpg'
            className='h-20 w-20 bottom-0 left-0 fixed opacity-10'
          />
        </Link>
        <Link to='/wasp-and-orchid'>
          <img
            src='/wasp.jpg'
            className='h-20 w-20 bottom-12 left-12 fixed opacity-20'
          />
        </Link>
      </div>
    </main>
  );
}
