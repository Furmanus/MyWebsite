import {HOME} from '../constants/pages';
import {CHANGE_TAB} from '../constants/action_types';

const initialState = {
    selectedTab: HOME,
};

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TAB:
            return {
                ...state,
                selectedTab: action.selectedTab,
            };
        default:
            return {
                ...state,
            };
    }
}