﻿// @flow

import React, {PropTypes, Component} from "react";
import styles from "./Photos.css";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import Loader from "../../components/Loader";
import {photosRequest, resetPhotos} from "../../redux/actions/photosActions";
import {FLICKR_USER_ID, FLICKR_API_KEY} from "../../utils/util";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    photos: PropTypes.any
};

class PhotosContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(photosRequest(FLICKR_USER_ID, FLICKR_API_KEY, this.props.id));
    }

    componentWillUnmount() {
        this.props.dispatch(resetPhotos());
    }

    render() {
        return (
            this.props.photos.length == 0 ? <Loader /> : <div className={styles.main}>
                <div>
                    {this.props.photos.map((photoUrl, index) => {
                        return <img key={index} className={styles.mainImage} src={photoUrl}/>
                    }) }
                </div>
            </div>
        );
    }
}

PhotosContainer.propTypes = propTypes;

const mapStateToProps = (props, {params}) => {
    const {id} = params;
    const {photos} = props.photosInfo;
    return {photos, id};
};
export default withRouter(connect(mapStateToProps)(PhotosContainer));