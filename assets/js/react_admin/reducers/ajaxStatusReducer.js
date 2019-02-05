import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {

    if (action.type == types.BEGIN_AJAX_CALL) {
        return state + 1;
    }
    else if (/^.+_SUCCESS$/.test(action.type)) {
        return state - 1;
    }

    return state;
}