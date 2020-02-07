import React from 'react';
import styles from './InputItem.module.css';
import PropTypes from 'prop-types';

class InputItem extends React.Component {

    state = {
        inputTextValue: '',
        error:''
    };

    onButtonClick = () => {
        if (!this.props.tasksText.includes(this.state.inputTextValue) &&(this.state.inputTextValue.trim() !== '')) {
            this.setState({
                inputTextValue: '',
                error:''
            });
            this.props.onClickAdd(this.state.inputTextValue);
            }
        else if (this.props.tasksText.includes(this.state.inputTextValue)){
            this.setState({
                error: 'Ошибка! Это задание уже есть в списке!'
            });
        }
        else {
            this.setState({
                error: 'Ошибка! Пустое поле!'
            })
        }
    };

    render() {
        return (<div className={styles.box}>
            <div className={styles.form}>
                <input
                    className={styles.inputItem}
                    name="name"
                    type="text"
                    value={this.state.inputTextValue}
                    onChange={event => this.setState({inputTextValue: event.target.value.toUpperCase()})}
                    autoComplete='off'
                    required
                />
                <label
                    htmlFor="name"
                    className={styles.labelName}>
                    <span className={styles.contentName}>Добавить задание</span>
                </label>
            </div>
            <p className={styles.errorInput}>{this.state.error}</p>
            <input
                className={styles.button}
                type="submit"
                value="Добавить"
                onClick={this.onButtonClick}
            />
        </div>)
    }
}

InputItem.propTypes = {
    onClickAdd: PropTypes.func.isRequired
};

export default InputItem;