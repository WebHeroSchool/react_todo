import React from 'react';
import styles from './App.module.css';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';


const App = () =>
    (<Router>
        <section>
            <header className={styles.menuList}>
                <NavLink exact activeClassName={styles.activeAbout}
                         className={styles.link}
                         to='/'>Обо мне</NavLink>
                <NavLink exact activeClassName={styles.activeTodo}
                         className={styles.link}
                         to='/todo'>Дела</NavLink>
            </header>
        </section>
        <section>
            <Route exact path='/' component={About} />
            <Route path='/todo' component={Todo} />
        </section>
    </Router>);

export default App;
