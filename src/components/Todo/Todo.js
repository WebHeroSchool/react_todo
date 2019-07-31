import React from 'react';
import styles from './Todo.module.css';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';

class Todo extends React.Component {
    state = {
        tasks: [
            {
                text: 'Сделать дизайн чекбоксов и InputItem',
                isDone: true,
                id: 1
               
            }
        ],
        count: 2
    }

    onClickDone = id => {
        const newItemList = this.state.tasks.map(item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem;
        });
        this.setState({tasks: newItemList});
    };

    onClickDelete = id => {
        const newItemList = this.state.tasks.filter(item => {
            const newItem = {...item};
            if (item.id === id) {
                return newItem.id !== id;
            }
            return newItem;
        });
        this.setState({tasks: newItemList});
    }

    onClickAdd = text => this.setState(state => ({
        tasks:[
            ...state.tasks,

            {
                text,
                isDone: false,
                id: state.count + 1
            }
        ],
        count: state.count + 1
    }))


    render(){
        let taksDone = this.state.tasks.filter(item => item.isDone === false );
        let taksDoneLength = taksDone.length;

        return (<div className={styles.main}>
            <div className={styles.container}>
                <header className={styles.title}>Важные дела</header>
                <InputItem onClickAdd={this.onClickAdd}/>
                <ItemList task={this.state.tasks} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete}/>
                <Footer count={taksDoneLength}/>
            </div>
        </div>
        )
    }
}



export default Todo;
