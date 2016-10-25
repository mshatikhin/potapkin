// @flow
import {UPDATE_PHOTOS} from "../actions/photosActions";

type IState = {
    title: string;
    photos: any[]
}

const initialState = {
    title: "",
    photos: []
};

export default function (state: IState = initialState, action: any) {
    switch (action.type) {
        case UPDATE_PHOTOS:
            state.photos = action.photosInfo == null ? [] : action.photosInfo.photos;
            state.title = action.photosInfo == null ? "" : action.photosInfo.title;
            return Object.assign({}, state);
        default:
            return state;
    }
}
