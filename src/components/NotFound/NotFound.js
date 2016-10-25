import React, {Component} from "react";
import styles from "./NotFound.css";

export default class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className={styles.notFoundHeader}>
                    <p>Ошибка 404</p>
                    <a href="/">Перейти на главную</a>
                </h1>
                <div className={styles.notFound}>
                </div>
            </div>
        );
    }
}
