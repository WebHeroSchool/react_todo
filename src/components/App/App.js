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
                isDone: true,
                id: 1
            },
            {
                text: 'adasdasd',
                isDone: false,
                id: 2
            },
            {
                text: 'Повысить мотивацию',
                isDone: false,
                id: 3
            }
        ],
        count: 3
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

    onClickAdd = text => this.setState(state => ({
        tasks:[
            ...state.tasks,

            {
                text,
                isDone: false,
                id: state.count + 1
            }
        ],
        count: state.count + 1
    }))

    render() {
        let doTasks = this.state.tasks.filter(item => item.isDone === false);
        let doTasksNumber = doTasks.length;

        return (<div className={styles.container}>
            <div className={styles.wrap}>
                <h1 className={styles.title}>Важные Дела:</h1>
                <InputItem onClickAdd={this.onClickAdd}/>
                <ItemList task={this.state.tasks} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete}/>
                <Footer count ={doTasksNumber}/>
            </div>
        </div>
        )
    }
}

export default App;
