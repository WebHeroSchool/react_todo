import React from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Todo from '../Todo/Todo';
import Contacts from '../Contacts/Contacts';
import About from '../About/About';


const App = () =>
(   <Router>
        <div className={styles.wrap}>
            <header className={styles.menuList}>
                <Link className={styles.link} to='/'>Обо мне</Link>
                <Link className={styles.link} to='/todo'>Дела</Link>
                <Link className={styles.link} to='/contacts'>Контакты</Link>
            </header>
        </div>
        <div>
            <Route path='/' exact component={About} />
            <Route path='/todo' component={Todo} />
            <Route path='/contacts' component={Contacts} />
        </div>
    </Router>)

export default App;
