import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

import ROUTES from '~/routes';

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
        {ROUTES.map((r) => (
          <p key={r}>
            <Link key={r} to={`/${r}`}>
              {r}
            </Link>
          </p>
        ))}
      </div>
      <div className='w-3/4'>
        <img src='/ginger.png' alt='ginger' />
      </div>
    </div>
  );
}
