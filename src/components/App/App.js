import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import InputItem from '../InputItem/InputItem';
import { array } from 'prop-types';

class App extends React.Component {
    state = {
        tasks: [
            {
                text: 'Повысить мотивацию',
                isDone: true,
                id: 1
            },
            {
                text: 'Сделать задачу',
                isDone: false,
                id: 2
            },
            {
                text: 'Отдохнуть',
                isDone: true,
                id: 3
            },
            {
                text: 'Играть',
                isDone: false,
                id: 4
            }
        ]
    }

    onClickDone = id => {
        const newItemList = this.state.tasks.map(item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem;
        });
        this.setState({tasks: newItemList});
    };

    onClickDelete = id => {
        const newItemList = this.state.tasks.filter(item => {
            const newItem = {...item};
            if (item.id === id) {
                return newItem.id !== id;
            }
            return newItem;
        });
        this.setState({tasks: newItemList});
    }

    render() {
        let doTasks = this.state.tasks.filter(item => item.isDone === false);
    
        return (<div className={styles.wrap}>
            <h1 className={styles.title}>Важные Дела:</h1>
            <InputItem />
            <ItemList task={this.state.tasks} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete}/>
            <Footer count ={doTasks.length}/>
        </div>
        )
    }
}

export default App;
