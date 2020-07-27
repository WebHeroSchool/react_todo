import React from 'react';
import styles from './CheckboxRemove.module.css';
import PropTypes from 'prop-types';
import {DataContext} from '../Todo/Todo';

const CheckboxRemove = ({taskId}) =>
    (<div>
        <DataContext.Consumer>
            {({onClickDelete}) => (
                <div>
                    <input
                        className={styles.checkboxInput}
                        type='checkbox'
                        onClick={() => onClickDelete(taskId)}
                        id={`remove + ${taskId}`}
                    />
                    <label
                        className={styles.checkboxLabel}
                        htmlFor={`remove + ${taskId}`}>
                    </label>
                </div>
            )}
        </DataContext.Consumer>
    </div>);

CheckboxRemove.propTypes = {
    taskId: PropTypes.number.isRequired
};

export default CheckboxRemove;