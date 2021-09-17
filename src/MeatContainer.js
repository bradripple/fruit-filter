import React, {useState} from 'react';
import List from './List';
import Input from './Input';

const MeatContainer = props => {
    //Individual pieces of state with their own books
    const [meatsToDisplay, setMeatsToDisplay] = useState(props.meats);
    const [filterValue, setFilterValue] = useState('');

    const handleFilterChange = e => {
        e.preventDefault();

        const newValue = e.target.value;
        setFilterValue(newValue);
        const filtermeatList = props.meats.filter(meat => {
            return meat.toLowerCase().includes(newValue.toLowerCase());
        })
        console.log('filterveg', filtermeatList)
        setMeatsToDisplay(filtermeatList);
    }


    return(
        <div className="fruit">
            <List foods={meatsToDisplay} />
            <Input value={filterValue} onChange={handleFilterChange}/>

        </div>

    );
}

export default MeatContainer;