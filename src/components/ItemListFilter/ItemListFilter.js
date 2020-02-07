import React from 'react';
import styles from './ItemListFilter.module.css';
import PropTypes from 'prop-types';
import ItemList from '../ItemList/ItemList';


class ItemListFilter extends React.Component {

    state = {
        filterDone: false,
        filterUndone: false,
    };

    handleChange = event => {
        switch (event) {
            case 0:
                this.setState({filterUndone: false, filterDone: false});
                break;
            case 1:
                this.setState({filterUndone: false, filterDone: true});
                break;
            case 2:
                this.setState({filterUndone: true, filterDone: false});
                break;
            default:
                this.setState({
                    filterList: 'All',
                    filterUndone: false, filterDone: false
                });
                break;
        }
    };

    render() {
        const {tasks} = this.props;
        const {filterDone, filterUndone} = this.state;
        return (<div>
            <div className={styles.filter}>
                <input className={styles.filterInput}
                       id='All'
                       defaultChecked={true}
                       name='itemList'
                       onChange={() => this.handleChange(0)}
                       type='radio'/>
                <label className={styles.inputLabel} htmlFor='All'>
                    Все: {tasks.length}</label>
                <input className={styles.filterInput}
                       id='Done'
                       defaultChecked={false}
                       name='itemList'
                       onChange={() => this.handleChange(1)}
                       type='radio'/>
                <label className={styles.inputLabel} htmlFor='Done'>
                    Выполненные: {tasks.filter(item => item.isDone === true).length}</label>
                <input className={styles.filterInput}
                       id='Undone'
                       defaultChecked={false}
                       name='itemList'
                       onChange={() => this.handleChange(2)}
                       type='radio'/>
                <label className={styles.inputLabel} htmlFor='Undone'>
                    Невыполненные: {tasks.filter(item => item.isDone === false).length}
                </label>
            </div>
            {tasks.length === 0 ?
                <div className={styles.add_task}/> :
                (!filterDone && !filterUndone) ?
                    <ItemList task={tasks}/>
                    :
                    (filterDone === true) ?
                        <ItemList task={tasks.filter(item => item.isDone === true)}/>
                        :
                        <ItemList task={tasks.filter(item => item.isDone === false)}/>
            }
        </div>)
    }
}

ItemListFilter.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default ItemListFilter;