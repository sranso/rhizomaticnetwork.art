import { isArray, last } from 'radash';
import { safeLocalStorage } from './safeLocalStorage';

const setWeb = (pathname: string) => {
  const web = getWeb();
  if (!isArray(web)) {
    safeLocalStorage.setItem<string[]>('web', [pathname]);
    return;
  }
  if (last(web) === pathname) return;
  web.push(pathname);
  safeLocalStorage.setItem<string[]>('web', web);
};

const getWeb = () => {
  return safeLocalStorage.getItem<string[]>('web');
};

export { getWeb, setWeb };
