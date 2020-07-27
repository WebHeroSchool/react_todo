import React from 'react';
import styles from './CheckboxChange.module.css';
import PropTypes from 'prop-types';
import {DataContext} from '../Todo/Todo';

const CheckboxChange = ({taskId, taskEditor}) =>
    (<DataContext.Consumer>
        {({enableEditor}) => (
            <div>
                <input
                    className={styles.checkboxInput}
                    type='checkbox'
                    onClick={() => enableEditor(taskId)}
                    id={`change + ${taskId}`}
                />
                <label
                    className={!taskEditor?styles.checkboxEdit:styles.checkboxOk}
                    htmlFor={`change + ${taskId}`}>
                </label>
            </div>
        )}
    </DataContext.Consumer>);

CheckboxChange.propTypes = {
    taskId: PropTypes.number.isRequired,
    taskEditor: PropTypes.bool.isRequired
};

export default CheckboxChange;

