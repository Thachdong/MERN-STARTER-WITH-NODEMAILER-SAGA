import { take, put, call, all } from "redux-saga/effects";
import * as Api from "../../api";
import * as userActions from "./userActions";

//1. LOGIN
function* login() {
  while (true) {
    const { email, password } = yield take("LOGIN_REQUEST");
    const user = yield call(Api.login, email, password);
    if (user.success) {
      yield call(Api.storeToken, user.data.token);
      yield put(userActions.loginSuccess({ ...user.data, token: "" }));
    } else {
      yield put(userActions.loginFail(user.message));
    }
  }
}

//2.LOGOUT
function* logout() {
  while (true) {
    yield take("LOGOUT");
    yield call(Api.logout);
    yield call(Api.removeToken);
  }
}

//3. AUTHERIZATION
function* authorize() {
  const token = Api.getToken();
  if (!token) {
    return false;
  }
  const user = yield call(Api.getUser, token);
  if (user.success) {
    yield put(userActions.loginSuccess({ ...user.data }));
  } else {
    yield put(userActions.loginFail(user.message));
  }
}

//4. REGISTER
function* register() {
  while (true) {
    const { userInfo } = yield take("REGISTER_REQUEST");
    console.log(userInfo);
    const user = yield call(Api.register, userInfo);
    yield put(userActions.apiCall("register", user.success, user.message));
  }
}
// ROOT USER SAGA
export default function* rootSaga() {
  yield all([register(), login(), logout(), authorize()]);
}
