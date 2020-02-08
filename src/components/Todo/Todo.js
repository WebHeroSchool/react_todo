import React from 'react';
import styles from './Todo.module.css';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import ItemListFilter from '../ItemListFilter/ItemListFilter';

export const DataContext = React.createContext();

class Todo extends React.Component {
    state = {
        tasks: [
            {
                text: 'СДЕЛАТЬ ЧТО-ТО',
                isDone: true,
                id: 1,
                editor: false

            },
            {
                text: 'REACT',
                isDone: true,
                id: 2,
                editor: false
            }
        ],
        count: 2
    };

    componentWillMount() {
        localStorage.getItem('tasks') && this.setState({
            tasks: JSON.parse(localStorage.getItem('tasks')),
            count: JSON.parse(localStorage.getItem('count'))
        });
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('tasks', JSON.stringify(nextState.tasks));
        localStorage.setItem('count', JSON.stringify(nextState.count));
    }

    onClickDone = id => this.setState(state => {
        const newItemList = state.tasks.map(item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem;
        });
        return {tasks: newItemList}
    });

    enableEditor = id => this.setState(state => {
        const newItemList = state.tasks.map(item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.editor = !item.editor;
            }
            return newItem
        });
        return {tasks: newItemList}
    });

    onClickDelete = id => this.setState(state =>
        ({tasks: state.tasks.filter(item => item.id !== id)}));

    onClickChange = (id, text )=> this.setState(state => {
        const newItemList = state.tasks.map(item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.text = text
            }
            return newItem
        });
        return {tasks: newItemList}
    });


    onClickAdd = text => this.setState(state => {
        return {
            tasks:[
                ...state.tasks,
                {
                    text,
                    isDone: false,
                    id: state.count + 1,
                    editor: false
                }
            ],
            count: state.count + 1
        }
    });

    render() {
        const tasksText = this.state.tasks.map(item => item.text);
        return (<div className={styles.main}>
                <div className={styles.container}>
                    <header className={styles.title}>Список важных задач</header>
                    <InputItem onClickAdd={this.onClickAdd} tasksText={tasksText}/>
                    <DataContext.Provider value={{
                        tasksText: tasksText,
                        onClickDone: this.onClickDone,
                        onClickChange: this.onClickChange,
                        onClickDelete: this.onClickDelete,
                        enableEditor: this.enableEditor}}>
                        <ItemListFilter tasks={this.state.tasks}/>
                    </DataContext.Provider>
                </div>
            </div>
        )
    }
}

export default Todo;
