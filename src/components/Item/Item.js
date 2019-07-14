import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';

const Item = ({taskText, taskDone}) => (<div className=
    {classnames({
        [styles.text]: true,
        [styles.done]: taskDone
    })}

>{taskText}</div>)

export default Item;
