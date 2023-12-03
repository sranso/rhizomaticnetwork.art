export default function Start() {
  const showOne = Math.round(Math.random()) === 1;
  // add click target in a window that takes to diff page
  return (
    <main className='flex'>
      {showOne ? (
        <img src='/light-inside.gif' className='w-full' />
      ) : (
        <>
          <img src='/light-inside.gif' className='w-half' />
          <img src='/light-inside.gif' className='w-half' />
          <img src='/light-inside.gif' className='w-half' />
          <img src='/light-inside.gif' className='w-half' />
          <img src='/light-inside.gif' className='w-half' />
        </>
      )}
    </main>
  );
}