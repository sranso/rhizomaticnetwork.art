import type { LinksFunction } from '@remix-run/node';
import { useState, useEffect } from 'react';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from '@remix-run/react';
import stylesheet from '~/tailwind.css';

import TimeContext from './components/TimeContext';
import NavBar from './components/NavBar';
import { setWeb } from '~/helpers/web';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export default function App() {
  const [time, setTime] = useState(new Date());
  const location = useLocation();
  useEffect(() => {
    const timeInterval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, [time]);
  useEffect(() => {
    setWeb(location.pathname);
  }, [location]);

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <TimeContext.Provider value={{ time }}>
          <NavBar />
          <Outlet />
        </TimeContext.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
