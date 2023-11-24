export default function Start() {
  const triangleClasses = [
    { border: '15rem', borderBottom: '20rem', rotation: 'rotate-2' },
    { border: '12rem', borderBottom: '18rem', rotation: 'rotate-3' },
    { border: '10rem', borderBottom: '15rem', rotation: 'rotate-6' },
    { border: '5rem', borderBottom: '10rem', rotation: 'rotate-12' },
    { border: '2rem', borderBottom: '8rem', rotation: 'rotate-45' },
  ];
  return (
    <main>
      {/* what is the message here. how can i make this more silly.
also look at notion notes, at alan watts */}
      <div className='flex w-screen h-screen'>
        {[1, 2, 3, 4, 5].map((num, i) => {
          return (
            <div
              className={`w-0 h-0 relative origin-center ${triangleClasses[i].rotation}`}
              style={{
                border: `${triangleClasses[i].border} solid transparent`,
                borderTop: '0',
                borderBottom: `${triangleClasses[i].borderBottom} solid red`,
              }}
            ></div>
          );
        })}
      </div>
    </main>
  );
}
