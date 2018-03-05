import start from 'lodash.startcase';

const getTitleFromPathname = (pathname = '') =>
  start(pathname.replace(/\W/g, ' '));

export default getTitleFromPathname;
