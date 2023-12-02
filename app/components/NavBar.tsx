import { Link } from '@remix-run/react';

import ROUTES from '~/routes';

// TODO: error bc server and client links don't match
export default function NavBar() {
  const random = Math.floor(Math.random() * ROUTES.length);
  return (
    <nav className='fixed -right-20 bottom-24 z-10 flex justify-between bg-transparent'>
      <Link
        to={`/${ROUTES[random]}`}
        className='text-amber-900 rotate-90 text-xl font-extrabold'
      >
        Rhizomatic network
      </Link>
    </nav>
  );
}
