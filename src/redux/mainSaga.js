import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth138Saga from '../features/EmailAuth138/redux/sagas';
import EmailAuth137Saga from '../features/EmailAuth137/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth138Saga,
EmailAuth137Saga,
EmailAuthSaga,
    
  ]);
}