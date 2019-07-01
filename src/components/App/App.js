import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  const items = [
    {value: 'Повысить мотивацию'},
    {value: 'Сделать задачу'},
    {value: 'Отдохнуть'}
  ];

  return(
    <div className="wrap">
      <h1 className="wrap_title">Важные Дела:</h1>
      <ItemList items={items}/>
      <Footer count={3} />
    </div>);
  }

export default App;
