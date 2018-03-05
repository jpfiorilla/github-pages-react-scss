import start from 'lodash.startcase';

const getTitleFromPathname = (pathname = '') =>
  start(pathname.replace(/\W/g, ' ')).trim();

export default getTitleFromPathname;
