import React from 'react';

const Input = props => {

    return (
        <div className="list">
            <label htmlFor="fruit-filter">Filter: </label>
            <input type="text" name="fruit-filter" value={props.value} onChange={props.onChange} />
        </div>
    )
}

export default Input;
 