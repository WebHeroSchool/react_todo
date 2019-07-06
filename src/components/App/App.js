import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import InputItem from '../InputItem/InputItem';

const App = () => {

    const tasks = [
        {
            text: 'Повысить мотивацию',
            isDone: true
        },
        {
            text: 'Сделать задачу',
            isDone: false
        },
        {
            text: 'Отдохнуть',
            isDone: true
        },
        {
            text: 'Играть',
            isDone: false
        }
    ]

    let doTasks = tasks.filter(item => item.isDone === false);

    return (<div className={styles.wrap}>
        <h1 className={styles.title}>Важные Дела:</h1>
        <InputItem />
        <ItemList task={tasks}/>
        <Footer count ={doTasks.length}/>
    </div>
    )
}
export default App;
