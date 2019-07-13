import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({task, onClickDone}) => (<ul className={styles.list}>
    {task.map(item => (
        <li><Item 
        taskText={item.text}
        taskDone={item.isDone}
        onClickDone={onClickDone}
        taskId ={item.id}/>
        </li>
    ))}
</ul>)

export default ItemList;
