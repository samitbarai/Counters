
import React, { Component } from 'react';
import './counter.css'


class Counter extends Component {
    
    render() {
        return (
            <div>
                <div className='product-line'>
                {this.props.counter.name}
                <button disabled={this.props.counter.value > 0 ? false : true} onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-outline-secondary btn-sm m-2">
                    -
                </button>
                <span className={this.getBadgeClasses()} style={{ width: "80px" }}>
                    {this.formatCount()}
                </span>
                <button disabled={this.props.counter.value < 5 ? false : true} onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-outline-primary btn-sm m-2">
                    +
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="badge badge-pill badge-danger" >
                    delete
                </button>
                </div>
                <p className='warning-text' style={{ color: "#00000", opacity: this.props.counter.value < 5 ? 0 : 1 }}>
                You can't add more than 5 items
                </p>
          </div>
        );
    }

    onHoverDelete() {
        let classes = '';
    }

    getBadgeClasses() {
        let classes = "badge m-2 p-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "light";
        return classes;
    }

    formatCount() {
        const { value } =  this.props.counter;
        // return value === 0 ? 'Zero' : value;
        if (value > 0) {
            return value + ' items';
        }
        else {
            return 'Zero';
        }
    };
}
 
export default Counter;