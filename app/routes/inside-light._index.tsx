import { Link } from '@remix-run/react';
import cx from 'classnames';

export default function Start() {
  const showOne = Math.round(Math.random()) === 1;
  // add click target in a window that takes to diff page
  return (
    <main className='flex'>
      <Link
        to='/dark-night'
        className={cx({
          'grid grid-cols-5 mt-20': !showOne,
          'mx-auto': showOne,
        })}
      >
        {showOne ? (
          <img src='/light-inside.gif' className='w-full' />
        ) : (
          <>
            <img src='/light-inside.gif' className='w-half' />
            <img src='/light-inside.gif' className='w-half' />
            <img src='/light-inside.gif' className='w-half' />
            <img src='/light-inside.gif' className='w-half' />
            <img src='/light-inside.gif' className='w-half' />
          </>
        )}
      </Link>
    </main>
  );
}
