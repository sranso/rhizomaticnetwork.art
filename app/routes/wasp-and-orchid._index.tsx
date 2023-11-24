import { Link } from '@remix-run/react';

export default function WaspAndOrchid() {
  const iframeOverrides = `
    .ytp-chrome-top, .ytp-show-cards-title, .ytp-impression-link {
      display: none;
    }
  `;
  return (
    <div className='flex w-screen h-screen relative'>
      <p className='absolute bottom-2 left-2 w-full md:w-8/12 bg-emerald-950 p-4 text-orange-100'>
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
      </p>
      <style>{iframeOverrides}</style>
      <iframe
        width='100%'
        height='100%'
        src='https://www.youtube.com/embed/6yLnKfhmUzg?si=91Yevk6Lz8jlhKxz&showinfo=0&controls=0'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  );
}
