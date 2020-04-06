import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth138Reducer from '../features/EmailAuth138/redux/reducers';
import EmailAuth137Reducer from '../features/EmailAuth137/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth138: EmailAuth138Reducer,
EmailAuth137: EmailAuth137Reducer,
EmailAuth: EmailAuthReducer,

});