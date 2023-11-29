import { Link } from '@remix-run/react';

export default function Territories() {
  return (
    <>
      <div className='w-full absolute'>
        <img
          src='2022-11-30.jpg'
          alt='watercolor of leaves'
          className='object-none mx-auto'
        />
      </div>

      {Array.from(Array(12)).map((_x, i) => {
        return (
          <div className='relative top-10' key={i}>
            <p className='flex justify-around w-full p-4 text-orange-100'>
              <div className='h-10 w-10 bg-emerald-950' />
              <div className='h-10 w-10 bg-emerald-950' />
              <div className='h-10 w-10 bg-emerald-950' />
              <div className='h-10 w-10 bg-emerald-950' />
            </p>
          </div>
        );
      })}

      {/* <p className='absolute bottom-2 left-2 right-2 bg-emerald-950 p-4 text-orange-100'>
        <blockquote cite='https://files.libcom.org/files/A%20Thousand%20Plateaus.pdf'>
          The orchid deterritorializes by forming an image, a tracing of a wasp;
          but the wasp reterritorializes on that image. The wasp is nevertheless
          derritorialized, becoming a piece in the orchid's reproductive
          apparatus. But it reterritorializes the orchid by transporting its
          pollen. Wasp and orchid, as heterogeneous elements, form a rhizome.
        </blockquote>
        <br />
        &mdash;{' '}
        <Link
          to='https://files.libcom.org/files/A%20Thousand%20Plateaus.pdf'
          target='_blank'
        >
          <span className='underline'>
            A Thousand Plateaus: Capitalism and Schizophrenia
          </span>
        </Link>{' '}
        by the French philosopher Gilles Deleuze and the French psychoanalyst
        Félix Guattari
      </p> */}
    </>
  );
}
