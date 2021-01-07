import {
    takeEvery,
    put
} from 'redux-saga/effects';
import {
    delay
} from 'redux-saga/effects'

function* incrementAsync() {
    yield delay(1000);
    yield put({
        type: 'INCREMENT_SUCCESS'
    })
}


export function* watchIncrement() {
    yield takeEvery('INCREMENT', incrementAsync)
}