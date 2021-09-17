import React, {useState} from 'react';
import List from './List';
import Input from './Input';

const SweetsContainer = props => {
    //Individual pieces of state with their own books
    const [sweetsToDisplay, setSweetsToDisplay] = useState(props.sweets);
    const [filterValue, setFilterValue] = useState('');

    const handleFilterChange = e => {
        e.preventDefault();

        const newValue = e.target.value;
        setFilterValue(newValue);
        const filtersweetList = props.sweets.filter(sweet => {
            return sweet.toLowerCase().includes(newValue.toLowerCase());
        })
        console.log('filterveg', filtersweetList)
        setSweetsToDisplay(filtersweetList);
    }


    return(
        <div className="fruit">
            <List foods={sweetsToDisplay} />
            <Input value={filterValue} onChange={handleFilterChange}/>

        </div>

    );
}

export default SweetsContainer;