import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({count}) => (
    <footer className={styles.footer}>
        <p className={styles.text}>Осталось дел: {count}</p>
    </footer>
)

Footer.defaultProps  = {
    count: 0
}

Footer.propTypes = {
    count: PropTypes.number.isRequired
};

export default Footer;