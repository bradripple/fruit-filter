import React from 'react';

const List = props => {
    const foodItems = props.foods.map((food, idx) => {
        return <li key={idx}>{food}</li>
    })

    return (
        <div className="list">
            <ul>
                {foodItems}
            </ul>
        </div>

    )
}

export default List;

