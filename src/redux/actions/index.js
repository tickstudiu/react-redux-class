import { CHANG_LANGUAGE } from '../types';
export * from './calculator';

export const changeLanguage = lang => dispatch => {
    dispatch({
        type: CHANG_LANGUAGE,
        payload: lang
    });
};
