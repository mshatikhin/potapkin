// @flow
import React, {PropTypes, Component} from "react";
import styles from "./Stories.css";
import {connect} from "react-redux";
import {browserHistory, withRouter} from "react-router";
import Loader from "../../components/Loader";
import {storyRequest} from "../../redux/actions/storiesActions";
import {FLICKR_USER_ID, FLICKR_API_KEY, portfolioIds} from "../../utils/util";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    albums: PropTypes.any
};

class StoriesContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(storyRequest(FLICKR_USER_ID, FLICKR_API_KEY));
    }

    render() {
        return (
            <div className={styles.main}>
                {this.props.stories.length == 0 ? <Loader /> : this.props.stories
                    //.filter(s => !portfolioIds.some(i => i == s.id))
                    .map((album) => {
                        const additionalClass = (album.primary_photo_extras.width_z - album.primary_photo_extras.height_z) > 0 ? styles.horizontalImage : styles.verticalImage;
                        return <div
                            key={album.id}
                            className={styles.card}
                            title="Перейти в альбом"
                            onClick={() => { browserHistory.push("/stories/" + album.id) } }>
                            <div className={styles.imageWrapper}>
                                <img className={styles.mainImage + " " + additionalClass}
                                     src={album.primary_photo_extras.url_z}/>
                            </div>
                            <div className={styles.meta}>
                                {album.title._content}, {album.photos} фото
                            </div>
                        </div>
                    }) }
            </div>
        );
    }
}

StoriesContainer.propTypes = propTypes;

const mapStateToProps = (props) => {
    const {stories} = props.stories;
    return {stories};
};
export default withRouter(connect(mapStateToProps)(StoriesContainer));