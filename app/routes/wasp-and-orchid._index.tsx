import { Link } from '@remix-run/react';

export default function WaspAndOrchid() {
  const iframeOverrides = `
    .ytp-chrome-top, .ytp-show-cards-title, .ytp-impression-link {
      display: none;
    }
  `;
  return (
    <div className='flex w-screen h-screen relative'>
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
