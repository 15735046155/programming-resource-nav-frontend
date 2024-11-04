// import { Cookie } from '@/utils/cache';

import { getUrlQuery } from './getUrlQuery';

export const getPublicQuery = (url, params = {}) => {
  const [path, queryParams = ''] =  url.split('?');
  // 传入的url参数
  const _params = { ...getUrlQuery(queryParams), ...params };
  // 当前访问地址栏的url参数
  // const query = getUrlQuery();

  // if (query.tgqd && !_params.tgqd) Object.assign(_params, { tgqd: query.tgqd });
  // if (query.tgr && !_params.tgr) Object.assign(_params, { tgr: query.tgr });
  // if (query.code && !_params.code) Object.assign(_params, { code: query.code });
  // if (query.edu_page_location && !_params.edu_page_location) {
  //   Cookie.setItem('edu_page_location', _params.edu_page_location, { expires: 1 / 12 });
  //   Object.assign(_params, { edu_page_location: query.edu_page_location });
  // }

  const queryList = Object.entries(_params).map(x => `${x[0]}=${x[1]}`);

  return path + (queryList.length ? `?${queryList.join('&')}` : '');
};
