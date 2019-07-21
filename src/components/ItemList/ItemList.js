import React from 'react';
import Item from '../Item/Item';
import PropTypes from 'prop-types';
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

ItemList.propTypes = {
    task : PropTypes.array.isRequired,
    onClickDone: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
}

export default ItemList;
