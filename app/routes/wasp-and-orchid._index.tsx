export default function WaspAndOrchid() {
  const iframeOverrides = `
    .ytp-chrome-top, .ytp-show-cards-title, .ytp-impression-link {
      display: none;
    }
  `;
  return (
    <div className='flex w-screen h-screen relative'>
      <p className='italic absolute bottom-10 left-6 w-full md:w-8/12'>
        The orchid deterritorializes by forming an image, a tracing of a wasp;
        but the wasp reterritorializes on that image. The wasp is nevertheless
        derritorialized, becoming a piece in the orchid's reproductive
        apparatus. But it reterritorializes the orchid by transporting its
        pollen. Wasp and orchid, as heterogeneous elements, form a rhizome.
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
