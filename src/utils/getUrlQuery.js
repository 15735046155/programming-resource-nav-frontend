export const getUrlQuery = (url) => {
  // eslint-disable-next-line no-restricted-globals
  return Object.fromEntries(new URLSearchParams(decodeURI(url || location.search)));
};
