import {all} from 'redux-saga/effects';
import waitForRegisterUser from './Sagas/Saga';

export default function* rootSaga(){
    yield all([waitForRegisterUser()]);
}