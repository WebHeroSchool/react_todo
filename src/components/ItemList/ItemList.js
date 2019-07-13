import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const ItemList = ({task, onClickDone}) => (<ul className={styles.list}>
    {task.map(item => (
        <li className={styles.listItem}><Checkbox
        value="checkedA"
        onClick= {() => onClickDone(item.isDone)}
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      /><Item taskText={item.text} taskDone={item.isDone}/>
      <Checkbox
        value="checkedF"
        indeterminate
        inputProps={{
          'aria-label': 'indeterminate checkbox',
        }}
      />
        </li>
    ))}
</ul>)

export default ItemList;
