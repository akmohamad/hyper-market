import Reac from 'react';
import styles from "./Discount.module.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Discount = () => {

    return (
        <div class="container-fluid
        ">
            <Row>
                <Col xs={6} className={styles.Cols} >
                    <h2>Discounts</h2>
                    <Row>
                        <Col xs={6} className={styles.left} >
                            <h4>Firs Award</h4>
                            <h4>Second Award</h4>
                            <h4>Third Award</h4>
                            <h4>4TH Award</h4>
                        </Col>
                        <Col xs={6} className={styles.right}>
                            <h4>ADFGFDH<span className={styles.danger}> (expired)</span></h4>
                            <h4>GJHFGBV<span className={styles.danger}> (expired)</span></h4>
                            <h4>DNFJSNS<span className={styles.danger}> (expired)</span></h4>
                            <h4>VBKCBIC<span className={styles.success}> (avaible)</span></h4>
                        </Col>
                    </Row>
                </Col>
                <Col xs={6} className={styles.Cols} >
                    <h2>Awards</h2>
                    <Row>
                        <Col xs={6} className={styles.left} >
                            <h4>Firs Award</h4>
                            <h4>Second Award</h4>
                            <h4>Third Award</h4>
                            <h4>4TH Award</h4>
                        </Col>
                        <Col xs={6} className={styles.right}>
                            <h4>ADFGFDH<span className={styles.danger}> (expired)</span></h4>
                            <h4>GJHFGBV<span className={styles.danger}> (expired)</span></h4>
                            <h4>DNFJSNS<span className={styles.danger}> (expired)</span></h4>
                            <h4>VBKCBIC<span className={styles.success}> (avaible)</span></h4>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        </div>
    );
};

export default Discount;
