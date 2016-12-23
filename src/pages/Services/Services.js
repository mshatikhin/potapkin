// @flow
import React, {Component, PropTypes} from "react";
import styles from "./Services.css";
import {connect} from "react-redux";
import {postRequest} from "../../redux/actions/postActions";
import Loader from "../../components/Loader";
import {WP_SITE} from "../../utils/util";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    reviews: PropTypes.any
};

class ServicesContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(postRequest(WP_SITE, 116));
    }

    render() {
        return (
            <div className={styles.root}>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>Перечень услуг</th>
                        <th>Small Sasha</th>
                        <th>Big Sasha</th>
                        <th>Super Sasha</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Предварительная встреча с молодоженами</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Помощь в выборе свадебной концепции (стиля, цветовых решений)</td>
                        <td><span className={styles.green} title="Включено в пакет"></span></td>
                        <td><span className={styles.green} title="Включено в пакет"></span></td>
                        <td><span className={styles.green} title="Включено в пакет"></span></td>
                    </tr>
                    <tr>
                        <td>Помощь в подборе свадебных подрядчиков</td>
                        <td><span className={styles.green} title="Включено в пакет"></span></td>
                        <td><span className={styles.green} title="Включено в пакет"></span></td>
                        <td><span className={styles.green} title="Включено в пакет"></span></td>
                    </tr>
                    <tr>
                        <td>Время съемки</td>
                        <td>до 5 часов</td>
                        <td>до 10 часов</td>
                        <td>до 14 часов</td>
                    </tr>
                    <tr>
                        <td>Количество фотографий с выполненной авторской обработкой</td>
                        <td>от 250</td>
                        <td>от 500</td>
                        <td>от 750</td>
                    </tr>
                    <tr>
                        <td>Флешка с авторским оформлением</td>
                        <td><span className={styles.green} title="Включено в пакет"></span></td>
                        <td><span className={styles.green} title="Включено в пакет"></span></td>
                        <td><span className={styles.green} title="Включено в пакет"></span></td>
                    </tr>
                    </tbody>
                </table>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>Бонус</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Дизайн фотокниги</td>
                        <td>скидка 15%</td>
                        <td>скидка 20%</td>
                        <td><span className={styles.green} title="Включено в пакет"></span></td>
                    </tr>
                    <tr>
                        <td>Разработка Moodboard</td>
                        <td>скидка 15%</td>
                        <td>скидка 20%</td>
                        <td><span className={styles.green} title="Включено в пакет"></span></td>
                    </tr>
                    <tr>
                        <td>Съемка Love Story</td>
                        <td>скидка 20%</td>
                        <td>скидка 25%</td>
                        <td><span className={styles.green} title="Включено в пакет"></span></td>
                    </tr>
                    <tr>
                        <td>Свадебное слайд-шоу</td>
                        <td>скидка 20%</td>
                        <td>скидка 30%</td>
                        <td><span className={styles.green} title="Включено в пакет"></span></td>
                    </tr>
                    <tr>
                        <td>Набор фотооткрыток</td>
                        <td><span className={styles.grey} title="Не входит в пакет"></span></td>
                        <td><span className={styles.grey} title="Не входит в пакет"></span></td>
                        <td><span className={styles.green} title="Включено в пакет"></span></td>
                    </tr>
                    <tr>
                        <td>Фотокнига на 15 разворотов, формат 30х30см.</td>
                        <td><span className={styles.grey} title="Не входит в пакет"></span></td>
                        <td><span className={styles.grey} title="Не входит в пакет"></span></td>
                        <td><span className={styles.green} title="Включено в пакет"></span></td>
                    </tr>
                    </tbody>
                </table>
                {this.props.post == null
                    ? <Loader />
                    : <div className={styles.reviews}>
                        <h1>{this.props.post.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: this.props.post.content } }></div>
                    </div>}
            </div>
        );
    }
}

ServicesContainer.propTypes = propTypes;

const mapStateToProps = (props) => {
    const {post} = props;
    return {post};
};
export default connect(mapStateToProps)(ServicesContainer);