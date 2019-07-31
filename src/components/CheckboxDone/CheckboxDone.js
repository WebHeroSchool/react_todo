import React from 'react';
import styles from './CheckboxDone.module.css';

class CheckboxDone extends React.Component {
    
      render(){
          const {checkedTask, onClickDone, taskId} = this.props;

          return (<div>
            <input
                className={styles.checkboxInput}
                type="checkbox"
                defaultChecked={checkedTask}
                onClick={() => onClickDone(taskId)}
                id={taskId}
            />
            <label
                className={styles.checkboxLabel}
                htmlFor={taskId}>
            </label>
        </div>

          )
      }
}

export default CheckboxDone;