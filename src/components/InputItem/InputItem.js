import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';

const InputItem = () => (<div className ={styles.textField}> 
  <TextField 
      id="standard-with-placeholder"
      label="Добавить новое задание"
      placeholder="Задание"
      margin="normal"
  />
</div>)

export default InputItem;