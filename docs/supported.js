import * as classLists from './supported.list.js';

export const supported = Object.values(classLists)
  .map((e) => {
    if (typeof e === 'object') return Object.values(e).map((e) => e.split(/\s/));
    return e.split(/\s/);
  })
  .flat(Infinity);