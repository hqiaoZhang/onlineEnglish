/*
 * @Author: zhanghongqiao
 * @Date: 2019-07-01 10:11:29
 * @Email: 991034150@qq.com
 * @Description: 我的课程
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-07-03 17:07:03
 */


import {fetch} from '@/util/request';

const REQUESTSTUDYUNIT = 'REQUESTSTUDYUNIT';

const initialState = {
  unitId: 6
};


export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'PREV':
      return Object.assign({}, state, {
        unitId: --initialState.unitId
      });
    case 'NEXT':
      return Object.assign({}, state, {
        unitId: ++initialState.unitId
      });
    case REQUESTSTUDYUNIT:
      console.log(action);
      return {
        ...state,
        data: action
      };
    default:
      return state;
  }
}
const fetchURL = 'http://localhost:3000/';

export function rquestStudyunit(user) {
  return {
    types: [REQUESTSTUDYUNIT],
    promise: fetch('fetchStudyunit', {user}, data => {
      console.log(data);

      return data;
    }),
  };
}
