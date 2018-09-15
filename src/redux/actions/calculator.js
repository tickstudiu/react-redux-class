import { ADD_VALUE, SUB_VALUE } from '../types';

export const addValue = () => dispatch => {
    dispatch({
        type: ADD_VALUE,
    });
};

export const subValue = () => dispatch => {
    dispatch({
        type: SUB_VALUE,
    });
};