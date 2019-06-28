import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const Tasks = ['Повысить мотивацию', 'Сделать задачу', 'Отдохнуть']
const App = () => (
  <div>
    <h1>Важные Дела:</h1>
    <ItemList todoItem={Tasks}/>
    <Footer count={3} />
  </div>);

export default App;
