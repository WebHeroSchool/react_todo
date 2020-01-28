import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import CheckboxDone from '../CheckboxDone/CheckboxDone';
import CheckboxRemove from '../CheckboxRemove/CheckboxRemove';
import PropTypes from 'prop-types';

class Item extends React.Component {

    render(){
        const {taskText, taskDone, taskId, onClickDone, onClickDelete} = this.props;

        return (<div className={styles.listBox}>
            <CheckboxDone 
                checkedTask={taskDone} 
                onClickDone={onClickDone} 
                taskId={taskId}/>
            <div
                className=
                    {classnames({
                        [styles.text]: true,
                        [styles.done]: taskDone
                    })}
            >{taskText}</div>
            <CheckboxRemove 
                checkedTask={taskDone}
                onClickDelete={onClickDelete}
                taskText={taskText}
                taskId={taskId} />
        </div>)
    }
}

Item.defaultProps = {
    taskDone: false
}

Item.propTypes = {
    taskText: PropTypes.string.isRequired,
    taskId: PropTypes.number.isRequired,
    taskDone: PropTypes.bool.isRequired
}

export default Item;
