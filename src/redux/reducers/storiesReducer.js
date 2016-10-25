// @flow

import { UPDATE_STORIES } from '../actions/storiesActions';

type IState = {
    stories: any[];
}

const initialState = {
    stories: []
};

export default function (state: IState = initialState, action: any) {
    switch (action.type) {
        case UPDATE_STORIES:
            state.stories = action.stories;
            return Object.assign({}, state);
        default:
            return state;
    }
}
