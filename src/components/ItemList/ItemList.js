import React from 'react';
import styles from './ItemList.module.css';
import Item from '../Item/Item';
import PropTypes from 'prop-types';

const ItemList = ({task, onClickDone, onClickDelete}) => (<div className={styles.container}><ul className={styles.itemList}>
    {task.map(item =>(
        <li key ={item.id}>
            <Item 
                taskText={item.text} 
                taskDone={item.isDone}
                taskId={item.id}
                onClickDone={onClickDone}
                onClickDelete={onClickDelete} />
        </li>
    ))}
</ul></div>
);

ItemList.propTypes = {
    task : PropTypes.array.isRequired,
    onClickDone: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
}

export default ItemList;