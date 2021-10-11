import { takeEvery, call } from 'redux-saga/effects';
import CommonService from '../Services/CommonService';
// since it's a default export, and not a named export

function* registerUser() {
    try {
        const user = yield call(CommonService.RegisterUser);
        //yield put(setRegisterForm(user));
    } catch (e) { }
}

// * functions are referred as a generator functions which can be stopped in midway and resume execution again with yield's help
export default function* waitForRegisterUser() {
    // takeEvery creates a new task. The method passes to it here registerUser is a Task for takeEvery
    // REGISTER_USER : is an action to dispatch
    yield takeEvery("REGISTER_USER", registerUser);
}