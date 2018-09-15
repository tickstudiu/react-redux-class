import { ADD_VALUE, SUB_VALUE } from '../types';
import * as tools from '../../utils';

const initialState = {
    value: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_VALUE:
            return {
                ...state,
                value: tools.add(state.value)
            }
        case SUB_VALUE:
            return {
                ...state,
                value: tools.sub(state.value)
            }
        default:
            return state;
    }
}
