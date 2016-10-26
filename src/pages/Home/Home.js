// @flow
import styles from "./Home.css";
import {Component} from "react";
import Slider from "react-slick";
import {connect} from "react-redux";
import {slideShowId, FLICKR_API_KEY, FLICKR_USER_ID} from "../../utils/util";
import {photosRequest, resetPhotos} from "../../redux/actions/photosActions";

class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(photosRequest(FLICKR_USER_ID, FLICKR_API_KEY, slideShowId))
    }

    componentWillUnmount() {
        this.props.dispatch(resetPhotos());
    }

    render() {

        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true
        };

        return (
            <div className={styles.root}>
                <div className={styles.wrapper}>
                    <Slider {...settings}>
                        {this.props.images.map((img, index) => <div key={index} className={styles.imgWrap}>
                            <img src={img} className={styles.img}/>
                        </div>)}
                    </Slider>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let {photos} = state.photosInfo;
    return {
        images: photos || []
    }
};

export default connect(mapStateToProps)(Home);