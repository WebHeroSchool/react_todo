import React from 'react';
import styles from './Item.module.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';

class Item extends React.Component {
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    render() {
        const {taskText, taskDone, taskId, onClickDone, onClickDelete} = this.props;

        return (
            <div className={styles.listItem}>
            <Checkbox
                value="checkedA"
                checked={taskDone}
                onClick={() => onClickDone(taskId)}
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
                checked={taskDone}
                onClick={() => onClickDelete(taskId)}
                inputProps={{
                  'aria-label': 'indeterminate checkbox',
                }}
              />
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
