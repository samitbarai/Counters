import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {

    render() {
        const { onReset, onIncrement, onDecrement, onDelete, onAdd, counters } = this.props;
        return (
            <div>
                <button
                onClick={onAdd}
                className='col-sm-3 btn btn-sm m-2 btn-outline-primary'
                >
                + Add New Counter
                </button>
                {counters.map(counter =>
                    <Counter 
                    key={counter.id}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    value={counter.value}
                    counter={counter}
                />
                )}
                <button 
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
            </div>
         );
    }
}
 
export default Counters;