import { Link } from '@remix-run/react';

export default function NavBar() {
  return (
    <nav className='sm:m-3 flex justify-between'>
      <Link to='/' className='text-green-700 text-xl font-extrabold'>
        Rhizomatic network
      </Link>
    </nav>
  );
}
