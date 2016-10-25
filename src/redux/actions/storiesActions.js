// @flow

export const UPDATE_STORIES = 'UPDATE_STORIES';

export function updateStories(stories: any[]) {
    return { type: UPDATE_STORIES, stories };
}

export function storyRequest(userId: string, apiKey: string) {
    return (dispatch: any) => {
        return fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${apiKey}&user_id=${userId}&primary_photo_extras=url_z&format=json&nojsoncallback=1`)
            .then(response => response.json())
            .then((response) => {
                if (response.stat === "ok") {
                    return dispatch(updateStories(response.photosets.photoset));
                }
            })
            .catch(({ errors }) => dispatch(updateStories([])));
    };
}