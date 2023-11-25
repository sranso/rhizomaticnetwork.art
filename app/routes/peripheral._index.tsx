import cx from 'classnames';
export default function Start() {
  const LARGER_TRIANGLES = [
    { border: '15rem', borderBottom: '20rem', rotation: 'rotate-2' },
    { border: '12rem', borderBottom: '18rem', rotation: 'rotate-3' },
    { border: '10rem', borderBottom: '15rem', rotation: 'rotate-6' },
    { border: '5rem', borderBottom: '10rem', rotation: 'rotate-12' },
    { border: '2rem', borderBottom: '8rem', rotation: 'rotate-45' },
  ];
  const SMALLER_TRIANGLES = [
    { border: '6rem', borderBottom: '8rem', rotation: 'rotate-45' },
    { border: '5rem', borderBottom: '7rem', rotation: 'rotate-12' },
    { border: '4rem', borderBottom: '6rem', rotation: 'rotate-8' },
    { border: '3rem', borderBottom: '5rem', rotation: 'rotate-6' },
    { border: '2rem', borderBottom: '4rem', rotation: 'rotate-4' },
  ];
  return (
    <main className='relative'>
      <div className='flex w-screen h-screen bg-orange-100'>
        <div className='pl-4 z-10'>
          {[1, 2, 3, 4, 5].map((num, i) => {
            return (
              <div className='bg-orange-100'>
                <div
                  className={cx(
                    'bg-emerald-50 w-0 h-0 relative origin-center',
                    LARGER_TRIANGLES[i].rotation
                  )}
                  style={{
                    border: `${LARGER_TRIANGLES[i].border} solid transparent`,
                    borderTop: '0',
                    borderBottom: `${LARGER_TRIANGLES[i].borderBottom} solid rgb(8, 51, 68)`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
        <div className='z-10 scale-75'>
          {[1, 2, 3, 4, 5].map((num, i) => {
            return (
              <div className='bg-orange-100'>
                <div
                  className={cx(
                    'bg-emerald-50 w-0 h-0 relative origin-center',
                    SMALLER_TRIANGLES[i].rotation
                  )}
                  style={{
                    border: `${SMALLER_TRIANGLES[i].border} solid transparent`,
                    borderTop: '0',
                    borderBottom: `${SMALLER_TRIANGLES[i].borderBottom} solid rgb(8, 51, 68)`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
        <div className='fixed right-0 w-6/12 rotate-180 bottom-0'>
          {[1, 2, 3, 4, 5].map((num, i) => {
            return (
              <div className='bg-orange-100'>
                <div
                  className={cx(
                    'bg-emerald-50 w-0 h-0 relative origin-center',
                    SMALLER_TRIANGLES[i].rotation
                  )}
                  style={{
                    border: `${SMALLER_TRIANGLES[i].border} solid transparent`,
                    borderTop: '0',
                    borderBottom: `${SMALLER_TRIANGLES[i].borderBottom} solid rgb(8, 51, 68)`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
        <div className='fixed left-32 w-6/12 rotate-12 z-10 bottom-0 scale-50'>
          {[1, 2, 3, 4, 5].map((num, i) => {
            return (
              <div
                className={cx(
                  'bg-emerald-50 w-0 h-0 relative origin-center',
                  SMALLER_TRIANGLES[i].rotation
                )}
                style={{
                  border: `${SMALLER_TRIANGLES[i].border} solid transparent`,
                  borderTop: '0',
                  borderBottom: `${SMALLER_TRIANGLES[i].borderBottom} solid rgb(8, 51, 68)`,
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
