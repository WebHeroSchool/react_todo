import React from 'react';
import styles from './CheckboxDone.module.css';
import PropTypes from 'prop-types';
import {DataContext} from '../Todo/Todo';

const CheckboxDone = ({checkedTask, taskId}) =>
    (<div>
        <DataContext.Consumer>
            {({onClickDone}) => (
                <div>
                    <input
                        className={styles.checkboxInput}
                        type='checkbox'
                        defaultChecked={checkedTask}
                        onClick={() => onClickDone(taskId)}
                        id={`done + ${taskId}`}
                    />
                    <label
                        className={styles.checkboxLabel}
                        htmlFor={`done + ${taskId}`}>
                    </label>
                </div>
            )}
        </DataContext.Consumer>
    </div>);

CheckboxDone.propTypes = {
    taskId: PropTypes.number.isRequired,
    checkedTask: PropTypes.bool.isRequired
};

export default CheckboxDone;