import React, { Component } from 'react';
import Counter from './counter'
import './counter.css'

class Counters extends Component {

    handleClick = () => {
        this.props.onAdd(this.myInput.value);
        this.myInput.value = "";
    }

    render() {
        const { onReset, onIncrement, onDecrement, onDelete, onAdd, counters } = this.props;        
        return (
            <div>
                <form 
                    className="add-new-container"
                    onSubmit={(event) => event.preventDefault()} >
                    <input 
                        type="text"
                        placeholder="Enter an Item"
                        ref={(elem) => this.myInput = elem}
                    />
                    <button
                        type="submit"
                        className='col-sm-2 m-2 btn btn-sm btn-outline-primary'
                        onClick={this.handleClick} >
                        + Add
                    </button>
                    <div className="separator"></div>
                </form>
                {counters.map((counter) =>
                    <Counter
                        counter={counter}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        />
                )}
                <button 
                    onClick={onReset}
                    className="btn btn-light btn-sm m-2" >
                    Reset
                </button>
            </div>
         );
    }
}
 
export default Counters;