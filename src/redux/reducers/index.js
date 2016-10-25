import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import postReducer from './postReducer';
import albumsReducer from './albumsReducer';
import photosReducer from './photosReducer';
import historiesReducer from "./storiesReducer";

export default combineReducers({
    blog: blogReducer,
    post: postReducer,
    portfolio: albumsReducer,
    photosInfo: photosReducer,
    stories: historiesReducer
});
