import React, {useEffect, useLayoutEffect, useState} from 'react';
import styles from './Todo.module.css';
import InputItem from '../InputItem/InputItem';
import ItemListFilter from '../ItemListFilter/ItemListFilter';

export const DataContext = React.createContext();

const Todo = () => {

    const [count, setCount] = useState(1)
    const [tasks, setTasks] = useState([
        
    ])

    useEffect(() => {
        localStorage.setItem('my-tasks', JSON.stringify(tasks))
        localStorage.setItem('my-counts', JSON.stringify(count))
    }, [tasks, count])

    useLayoutEffect(() => {
        const data = localStorage.getItem('my-tasks')
        const dataCount = localStorage.getItem('my-counts')
        if (data) {
            setTasks(JSON.parse(data))
            setCount(JSON.parse(dataCount))
        }

    }, [])

    const onClickDone = id => {
        const newItemList = tasks.map(item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem;
        });
        setTasks(newItemList)
    }

    const enableEditor = id => {
        const newItemList = tasks.map(item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.editor = !item.editor;
            }
            return newItem
        });
        setTasks(newItemList)
    }

    const onClickDelete = id => {
        setTasks(tasks.filter(item => item.id !== id))
    }

    const onClickChange = (id, text) => {
        const newItemList = tasks.map(item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.text = text
            }
            return newItem
        });
        setTasks(newItemList)
    }

    const onClickAdd = text => {
        setTasks([
            ...tasks,
            {
                text,
                isDone: false,
                id: count + 1,
                editor: false
            }
        ])
        setCount(count + 1)
    }

    const tasksText = tasks.map(item => item.text);
    return (<div className={styles.main}>
            <div className={styles.container}>
                <header className={styles.title}>Список важных задач</header>
                <InputItem onClickAdd={onClickAdd} tasksText={tasksText}/>
                <DataContext.Provider value={{
                    tasksText: tasksText,
                    onClickDone: onClickDone,
                    onClickChange: onClickChange,
                    onClickDelete: onClickDelete,
                    enableEditor: enableEditor}}>
                    <ItemListFilter tasks={tasks}/>
                </DataContext.Provider>
            </div>
        </div>
    )
}

export default Todo;
