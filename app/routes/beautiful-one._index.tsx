export default function BeautifulOne() {
  const showFirst = Math.round(Math.random()) === 1;
  return (
    <main className='flex'>
      <img src='/xena.gif' className='w-full absolute' />
      {showFirst ? (
        <p className='w-2/5 mt-4 mx-auto relative text-sky-950'>
          “And while I am completely engulfed in my sadness, I am happy to sense
          that you exist, beautiful one. I am happy to have flung myself without
          fear into your beauty just as a bird flings itself into space. I am
          happy, dear, to have walked with steady faith on the waters of our
          uncertainty all the way to that island which is your heart and where
          pain blossoms.” ― Rainer Maria Rilke, The Dark Interval: Letters for
          the Grieving Heart
        </p>
      ) : (
        <p className='w-2/5 mt-4 mx-auto relative text-sky-950'>
          “I want to encourage you in your pain so that you will completely
          experience it in all its fullness, because as the experience of a new
          intensity it is a great life experience and leads everything back
          again to life, like everything that reaches a certain degree of
          greatest strength.” ― Rainer Maria Rilke, The Dark Interval: Letters
          on Loss, Grief, and Transformation
        </p>
      )}
      {/* https://www.goodreads.com/work/quotes/58759196-the-dark-interval#:~:text=It%20is%20still%20this%20death,which%20ought%20to%20be%20mine */}
    </main>
  );
}
