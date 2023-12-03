import { Link } from '@remix-run/react';
import cx from 'classnames';

import { useTimeContext, amPm } from '~/components/TimeContext';
import ROUTES from '~/helpers/routes';

export default function NavBar() {
  const { time } = useTimeContext();
  const amOrPm = amPm(time);
  const index = time.getMinutes() % ROUTES.length;
  return (
    <nav className='fixed -right-20 bottom-24 z-10 flex justify-between bg-transparent'>
      <Link
        to={`/${ROUTES[index]}`}
        className={cx('rotate-90 text-xl font-extrabold', {
          'text-sky-800': amOrPm === 'am',
          'text-amber-900': amOrPm === 'pm',
        })}
      >
        Rhizomatic network
      </Link>
    </nav>
  );
}
