import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import InputItem from '../InputItem/InputItem';

class App extends React.Component {
    state = {
        tasks: [
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
    }

    onClickDone = isDone => console.log(isDone);

    render() {
        let doTasks = this.state.tasks.filter(item => item.isDone === false);
    
        return (<div className={styles.wrap}>
            <h1 className={styles.title}>Важные Дела:</h1>
            <InputItem />
            <ItemList task={this.state.tasks} onClickDone={this.onClickDone}/>
            <Footer count ={doTasks.length}/>
        </div>
        )
    }
}

export default App;
