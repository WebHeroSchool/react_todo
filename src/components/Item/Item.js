import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import CheckboxDone from '../CheckboxDone/CheckboxDone';
import CheckboxRemove from '../CheckboxRemove/CheckboxRemove';
import PropTypes from 'prop-types';
import CheckboxChange from "../CheckboxChange/CheckboxChange";
import {DataContext} from "../Todo/Todo";

class Item extends React.Component {
    state = {
        currentText: this.props.taskText,
        status: '',
    };

    onDoubleClickChange = (id, taskText, onClickChange) => {
        if (!taskText.includes(this.state.currentText) && (this.state.currentText.trim() !== '') &&
            (!taskText.includes(this.state.currentText.trim()))) {
            this.setState({status: 'Отредактировано'});
            onClickChange(id, this.state.currentText)
        } else if (taskText.includes(this.state.currentText)) {
            this.setState({status: 'Ошибка! Это задание уже есть'})
        } else {
            this.setState({status: 'Ошибка!'})
        }
    };

    onKeyPress = (event, id, taskText, onClickChange) => {
        if (event.key === 'Enter') {
            this.onDoubleClickChange(id, taskText, onClickChange)
        }
    };

    render(){
        const {taskText, taskDone, taskId, taskEditor} = this.props;
        return (<DataContext.Consumer>
            {({onClickChange, tasksText}) => (
                <div className={styles.listBox}>
                    <CheckboxDone
                        checkedTask={taskDone}
                        taskId={taskId}/>
                    {taskEditor?<div className={styles.editorForm}>
                        <input id={`editor + ${taskId}`}
                               className={styles.editorInput}
                               value={this.state.currentText}
                               autoComplete='off'
                               onKeyDown={(event) => this.onKeyPress(event, taskId, taskText, onClickChange)}
                               onChange={event => this.setState({currentText: event.target.value.toUpperCase(), status: ''})}
                               onDoubleClick={() => this.onDoubleClickChange(taskId, tasksText, onClickChange)}
                               type='text'/>
                        <p className={styles.error}>{this.state.status}</p>
                        </div>
                        :
                        <div
                            className={classnames({
                                [styles.text]: true,
                                [styles.done]: taskDone})}
                        >{taskText}</div>
                    }
                    <CheckboxChange taskId={taskId} taskEditor={taskEditor}/>
                    <CheckboxRemove taskId={taskId} />
                </div>
            )}
        </DataContext.Consumer>)
    }
}

Item.defaultProps = {
    taskDone: false
};

Item.propTypes = {
    taskText: PropTypes.string.isRequired,
    taskId: PropTypes.number.isRequired,
    taskDone: PropTypes.bool.isRequired,
    taskEditor: PropTypes.bool.isRequired
};
export default Item;
