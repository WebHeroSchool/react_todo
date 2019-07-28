import React from 'react';
import styles from './CheckboxRemove.module.css';

class CheckboxRemove extends React.Component {
    
    render(){
        const {checkedTask, onClickDelete, taskId, taskText} = this.props;
        return (<div>
          <input
              className={styles.checkboxInput}
              type="checkbox"
              defaultChecked={checkedTask}
              onClick={() => onClickDelete(taskId)}
              id={taskText}
          />
          <label
              className={styles.checkboxLabel}
              htmlFor={taskText}>
          </label>
      </div>

        )
    }
}

export default CheckboxRemove;