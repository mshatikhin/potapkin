// @flow

import styles from "./Header.css";
import image from "./images/logo_text.png";

import Menu from "../Menu/Menu";
import {Link} from "react-router";
import {Component} from "react";

export default class Layout extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={styles.header}>
                <div className={styles.headerWrapper}>
                    <Link to="/" className={styles.logoLink}>
                        <img src={image} className={styles.logo} title="Фотоблог Sasha Potapkin" alt="Фотоблог Sasha Potapkin"/>
                    </Link>
                    <div className={styles.menu}>
                        <Menu />
                    </div>
                </div>
            </div>
        );
    }
}
