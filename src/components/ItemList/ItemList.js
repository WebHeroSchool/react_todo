import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({task, onClickDone, onClickDelete}) => (<ul className={styles.list}>
    {task.map(item => (
        <li key={item.id}> <Item 
        taskText={item.text}
        taskDone={item.isDone}
        onClickDelete={onClickDelete}
        onClickDone={onClickDone}
        taskId ={item.id}/>
        </li>
    ))}
</ul>)

export default ItemList;
