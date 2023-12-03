import { Link } from '@remix-run/react';

export default function Yayayayayaya() {
  return (
    <div className='flex flex-col justify-evenly items-center overflow-hidden w-screen h-screen relative'>
      <Link to='/growing-in-time'>
        <img
          src='https://media.tenor.com/iG6EyG57j_0AAAAC/davidbyrne-talkingheads.gif'
          alt='watercolor of leaves'
          className='object-cover'
        />
      </Link>
      <div>
        <div className='animate-bounce text-center'>
          <blockquote cite='https://files.libcom.org/files/A%20Thousand%20Plateaus.pdf'>
            Since each of us was several, there was already quite a crowd.
          </blockquote>
        </div>
        <div className='animate-spin text-center -mt-6'>
          <blockquote cite='https://files.libcom.org/files/A%20Thousand%20Plateaus.pdf'>
            Since each of us was several, there was already quite a crowd.
          </blockquote>
        </div>
      </div>
    </div>
  );
}
