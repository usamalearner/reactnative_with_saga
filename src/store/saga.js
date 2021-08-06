import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_ALL_USER_INFO_REQUEST, GET_ALL_USER_INFO_REQUEST_SUCCESS } from './action';

function* Saga() {
    yield takeEvery(GET_ALL_USER_INFO_REQUEST, getAllUserInfo);
  }
  
  function* getAllUserInfo(action) {
    try {
      // API call
      yield put({
        type: GET_ALL_USER_INFO_REQUEST_SUCCESS,
        payload: {
          id: 'id1',
          name: 'usama',
          email: 'testemail@test.com',
        },
      });
    } catch (err) {
      // Handle error
    }
  }
  
  export {Saga};