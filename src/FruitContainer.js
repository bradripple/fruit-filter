import React, {useState} from 'react';
import List from './List';
import Input from './Input';

const FruitContainer = props => {
    //Individual pieces of state with their own books
    const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits);
    const [filterValue, setFilterValue] = useState('');

    const handleFilterChange = (e) => {
        e.preventDefault();

        const newValue = e.target.value;
        setFilterValue(newValue);
        const filterFruitList = props.fruits.filter(fruits => {
            return fruits.toLowerCase().includes(newValue.toLowerCase());
        })
        setFruitsToDisplay(filterFruitList);
    }


    return(
        <div className="fruit">
            <List foods={fruitsToDisplay} />
            <Input value={filterValue} onChange={handleFilterChange}/>

        </div>

    );
}

export default FruitContainer;