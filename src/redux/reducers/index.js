import { combineReducers } from 'redux';

import languageReducer from './languageReducer';
import calculatorReducer from './calculatorReducer';

const rootReducers = combineReducers({
    lang: languageReducer,
    cal: calculatorReducer,
});

export default  rootReducers;
