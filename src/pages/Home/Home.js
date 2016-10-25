// @flow

import styles from "./Home.css";
import {Component} from "react";
import Slider from "react-slick";

const images = [
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800",
    "http://placeboobs.com/1600/800)"
];

const bestImages = [ 0, 1, 7, 9, 14, 15, 16, 18 ];

function getRandomArbitary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class Home extends Component {

    constructor() {
        super();
    }

    render() {
        const initSlide = bestImages[getRandomArbitary(1, bestImages.length)];
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: initSlide
        };

        return (
            <div className={styles.root}>
                <div className={styles.wrapper}>
                    <Slider {...settings}>
                        {images.map(( img, index ) => <div key={index} className={styles.imgWrap}>
                            <img src={img} className={styles.img} onLoad={this.onLoad}/>
                        </div>)}
                    </Slider>
                </div>
            </div>
        );
    }
}
