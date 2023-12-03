import { Link } from '@remix-run/react';

export default function IDKYet() {
  return (
    <main className='grid grid-cols-2 md:grid-cols-3 [&>a]:m-auto'>
      <Link to='/inside-light'>
        <img src='/drawing-class-1.jpg' />
      </Link>
      <Link to='/'>
        <img src='/drawing-class-3.jpg' />
      </Link>
      <Link to='/inside-light'>
        <img src='/drawing-class-2.jpg' />
      </Link>
      <Link to='/dark-night'>
        <img src='/drawing-class-6.jpg' />
      </Link>
      <Link to='/lie-down-with-me'>
        <img src='/drawing-class-5.JPG' />
      </Link>
      <Link to='/not-knowing-is-most-intimate'>
        <img src='/drawing-class-12.jpg' />
      </Link>
      <Link to='/yayayayayaya'>
        <img src='/drawing-class-7.JPG' />
      </Link>
      <Link to='/bathroom-with-a-view'>
        <img src='/drawing-class-8.JPG' />
      </Link>
      <Link to='/wasp-and-orchid'>
        <img src='/drawing-class-10.jpg' />
      </Link>
      <Link to='/sources'>
        <img src='/drawing-class-13.JPG' />
      </Link>
      <Link to='/madeline'>
        <img src='/drawing-class-4.JPG' />
      </Link>
      <Link to='/start'>
        <img src='/drawing-class-9.JPG' />
      </Link>
    </main>
  );
}
