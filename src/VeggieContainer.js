import React, {useState} from 'react';
import List from './List';
import Input from './Input';

const VeggieContainer = props => {
    //Individual pieces of state with their own books
    const [veggiesToDisplay, setVeggiesToDisplay] = useState(props.veggies);
    const [filterValue, setFilterValue] = useState('');

    const handleFilterChange = e => {
        e.preventDefault();

        const newValue = e.target.value;
        setFilterValue(newValue);
        const filterveggieList = props.veggies.filter(veggie => {
            return veggie.toLowerCase().includes(newValue.toLowerCase());
        })
        console.log('filterveg', filterveggieList)
        setVeggiesToDisplay(filterveggieList);
    }


    return(
        <div className="fruit">
            <List foods={veggiesToDisplay} />
            <Input value={filterValue} onChange={handleFilterChange}/>

        </div>

    );
}

export default VeggieContainer;