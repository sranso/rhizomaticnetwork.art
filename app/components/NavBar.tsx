import { Link } from '@remix-run/react';

export default function NavBar() {
  return (
    <nav className='fixed right-0 bottom-0 z-10 sm:m-3 flex justify-between bg-transparent'>
      <Link to='/' className='text-green-600 rotate-180 text-xl font-extrabold'>
        Rhizomatic network
      </Link>
    </nav>
  );
}
