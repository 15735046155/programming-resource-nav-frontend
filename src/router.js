import { getPublicQuery } from '@/utils/getPublicUrl'; // 注意循环引用
import { NavigateFunction } from 'react-router';

let navigateHistory = null;

export const $router = {
  _setRouterInstance(router: NavigateFunction) {
    navigateHistory = router;
  },
  push(url, params) {
    navigateHistory(getPublicQuery(url, params));
  },
  replace(url, params) {
    navigateHistory(getPublicQuery(url, params), { replace: true });
  },
  href(url, params) {
    // eslint-disable-next-line no-restricted-globals
    location.href = getPublicQuery(url, params);
  },
};
