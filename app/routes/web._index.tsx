import { Link } from '@remix-run/react';
import { useState, useEffect } from 'react';

import { getWeb } from '~/helpers/web';

// TODO add visualization for this
export default function Web() {
  const [web, setWeb] = useState<string[] | null>(null);
  useEffect(() => {
    setWeb(getWeb());
  }, []);
  return (
    <div className=''>
      {web &&
        web.map((w, i) => {
          return (
            <Link to={w}>
              <p key={`${w}-${i}`}>{w}</p>
            </Link>
          );
        })}
    </div>
  );
}
