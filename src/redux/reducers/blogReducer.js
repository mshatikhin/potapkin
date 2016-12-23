// @flow
import {UPDATE_BLOG} from "../actions/blogActions";

type IState = {
    posts: any[];
}

const initialState: IState = {
    posts: []
};

export default function (state: IState = initialState, action: any) {
    switch (action.type) {
        case UPDATE_BLOG:
            state.posts = action.blog.posts.filter(p => p.ID !== 116); //кроме отзывов
            return Object.assign({}, state);
        default:
            return state;
    }
}