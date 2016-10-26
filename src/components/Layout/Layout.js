import React, {Component} from "react";
import Header from "../Header/Header";
import styles from "./Footer.css";

const Footer = () => (<div className={styles.footer}>
    <div className={styles.soc}>
        <a href="https://vk.com/sashapotapkin" target="blank"><div className={styles.vk}></div></a>
        <a href="https://www.facebook.com/sashapotapkin" target="blank"><div className={styles.facebook}></div></a>
        <a href="https://www.instagram.com/sashapotapkin/" target="blank"><div className={styles.instagram}></div></a>
    </div>
</div>);

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}
