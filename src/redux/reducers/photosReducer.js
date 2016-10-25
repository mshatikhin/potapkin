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
            return Object.assign({}, state, action.photosInfo);
        default:
            return state;
    }
}
