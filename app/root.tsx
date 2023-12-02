import type { LinksFunction } from '@remix-run/node';
import { useState, useEffect } from 'react';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import stylesheet from '~/tailwind.css';

import TimeContext from './components/TimeContext';
import NavBar from './components/NavBar';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export default function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timeInterval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, [time]);
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
