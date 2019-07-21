import React from 'react';
import styles from './Footer.module.css';

const Footer = ({count}) =>  (<footer className={styles.lastTasks}>
    Осталось дел: {count}
</footer>)

Footer.defaultProps  = {
    count: 0
}

export default Footer;