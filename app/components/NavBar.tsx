import { Link } from '@remix-run/react';

export default function NavBar() {
  return (
    <nav className='fixed -right-20 bottom-24 z-10 flex justify-between bg-transparent'>
      <Link to='/' className='text-green-600 rotate-90 text-xl font-extrabold'>
        Rhizomatic network
      </Link>
    </nav>
  );
}
