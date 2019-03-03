import { fork } from 'redux-saga/effects'
import { watchFetchCategory } from './fetchCate'

export default function* rootSaga() {
    yield [
        fork(watchFetchCategory),
    ]
}
