import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
    state = {
      inputTextValue: ''
    };

    onButtonClick = () => {
        if (this.state.inputTextValue !== ''){
            this.setState({
                inputTextValue: ''
            });
            this.props.onClickAdd(this.state.inputTextValue);
        } else {
            this.setState({helperText: 'Ошибка! Пустое поле!', error: true})
            console.log('Ошибка!!');
        }
    }

    render() {

        return (<div className ={styles.textField}> 
        <TextField 
            id="standard-with-placeholder"
            label="Добавить новое задание"
            placeholder="Задание"
            margin="normal"
            value={this.state.inputTextValue}
            helperText={this.state.helperText}
            error={this.state.error}
            onChange={event => this.setState({inputTextValue: event.target.value.toUpperCase(), error: false, helperText: ''})}
        />
        <Button 
                className={styles.button}
                color="secondary"
                variant="contained"
                onClick={this.onButtonClick}>
                Добавить
            </Button>
        </div>)
    }
}



export default InputItem;