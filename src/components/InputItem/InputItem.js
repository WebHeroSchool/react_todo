import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
  <TextField
      id="standard-with-placeholder"
      label="Добавить новое задание"
      placeholder="Задание"
      margin="normal"
  />
</div>)

export default InputItem;
