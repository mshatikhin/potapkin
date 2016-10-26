// @flow
import React, {PropTypes, Component} from "react";
import styles from "./Stories.css";
import {connect} from "react-redux";
import {browserHistory, withRouter} from "react-router";
import Loader from "../../components/Loader";
import {historyRequest} from "../../redux/actions/historiesActions";
import {FLICKR_USER_ID, FLICKR_API_KEY} from "../../utils/util";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    albums: PropTypes.any
};

class HistoriesContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(historyRequest(FLICKR_USER_ID, FLICKR_API_KEY));
    }

    render() {
        return (
            <div className={styles.main}>
                {this.props.histories.length == 0 ? <Loader /> : this.props.histories.map((album) => {
                    const additionalClass = (album.primary_photo_extras.width_z - album.primary_photo_extras.height_z) > 0 ? styles.horizontalImage : styles.verticalImage;
                    return <div
                        key={album.id}
                        className={styles.card}
                        title="Перейти в альбом"
                        onClick={() => { browserHistory.push("/histories/" + album.id) } }>
                        <div className={styles.meta}>
                            <span className={styles.header}>{album.title._content}
                                <span className={styles.delimeter}></span>{album.photos} ФОТО</span>
                        </div>
                        <img className={styles.mainImage + " " + additionalClass}
                             src={album.primary_photo_extras.url_z}
                             width={album.primary_photo_extras.width_z}
                             height={album.primary_photo_extras.height_z}/>
                    </div>
                }) }
            </div>
        );
    }
}

HistoriesContainer.propTypes = propTypes;

const mapStateToProps = (props) => {
    const {histories} = props.histories;
    return {histories};
};
export default withRouter(connect(mapStateToProps)(HistoriesContainer));