import cx from 'classnames'
import { Reenie_Beanie } from 'next/font/google'

const reenieBeanie = Reenie_Beanie({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Navbar() {
  return (
    <div className="fixed left-2 top-1">
      <p className={cx('text-2xl', reenieBeanie.className)}>rhizomatic network</p>
    </div>
  )
}