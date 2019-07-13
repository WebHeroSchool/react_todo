import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({taskText, taskDone, taskId, onClickDone}) => (
    <div className={styles.listItem}>
    <Checkbox
        value="checkedA"
        checked={taskDone}
        onClick= {() => onClickDone(taskId)}
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />
<div className=
    {classnames({
        [styles.text]: true,
        [styles.done]: taskDone
    })}

>{taskText}</div>
<Checkbox
        value="checkedF"
        indeterminate
        inputProps={{
          'aria-label': 'indeterminate checkbox',
        }}
      />
</div>)

export default Item;
