import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <>
      <div>
        <h1 className='font-extrabold'>links</h1>
        <p>
          <Link to='/start'>start</Link>
        </p>
        <p>
          <Link to='/peripheral'>peripheral</Link>
        </p>
        <p>
          <Link to='/wasp-and-orchid'>wasp-and-orchid</Link>
        </p>
        <p>
          <Link to='/transient-ecstasy'>transient-ecstasy</Link>
        </p>
        <p>
          <Link to='/colors'>colors</Link>
        </p>
      </div>
      <div className='mt-5'>
        <h2 className='font-extrabold'>old</h2>
        <ul>
          <li>
            <a
              target='_blank'
              href='https://remix.run/tutorials/blog'
              rel='noreferrer'
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://remix.run/tutorials/jokes'
              rel='noreferrer'
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target='_blank' href='https://remix.run/docs' rel='noreferrer'>
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
