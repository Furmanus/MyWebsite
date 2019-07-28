import {CHANGE_TAB} from '../constants/action_types';

export function changeTab(tab) {
    return {
        type: CHANGE_TAB,
        selectedTab: tab,
    }
}