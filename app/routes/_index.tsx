import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Rhizomatic network' },
    {
      name: 'description',
      content: 'Since each of us was several, there was already quite a crowd.',
    },
  ];
};

export default function Index() {
  return (
    <div className='flex justify-between mt-4'>
      <div className='ml-4'>
        <h1 className='font-extrabold'>nodes</h1>
        <p>
          <Link to='/sources'>sources</Link>
        </p>
        <p>
          <Link to='/inside-light'>inside-light</Link>
        </p>
        <p>
          <Link to='/start'>start</Link>
        </p>
        <p>
          <Link to='/yayayayayaya'>yayayayayaya</Link>
        </p>
        <p>
          <Link to='/peripheral'>peripheral</Link>
        </p>
        <p>
          <Link to='/wasp-and-orchid'>wasp-and-orchid</Link>
        </p>
        <p>
          <Link to='/territories'>territories</Link>
        </p>
        <p>
          <Link to='/dark-night'>dark-night</Link>
        </p>
        <p>
          <Link to='/transient-ecstasy'>transient-ecstasy</Link>
        </p>
        <p>
          <Link to='/beautiful-one'>beautiful-one</Link>
        </p>
        <p>
          <Link to='/growing-in-time'>growing-in-time</Link>
        </p>
        <p>
          <Link to='/colors'>colors</Link>
        </p>
      </div>
      <div className='w-3/4'>
        <img src='/ginger.png' alt='ginger' />
      </div>
    </div>
  );
}
