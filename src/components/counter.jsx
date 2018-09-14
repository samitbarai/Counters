
import React, { Component } from 'react';


class Counter extends Component {
    
    render() {
        return <div>
            <div>
              Item Name which can be very long
              <button disabled={this.props.counter.value > 0 ? false : true } onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-outline-secondary btn-sm m-2">
                -
              </button>
              <span className={this.getBadgeClasses()}>
                {this.formatCount()}
              </span>
              <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-outline-primary btn-sm m-2">
                +
              </button>
              <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
                Delete
              </button>
            </div>
          </div>;
    }

    getBadgeClasses() {
        let classes = "badge badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } =  this.props.counter;
        // return value === 0 ? 'Zero' : value;
        if (value > 0) {
            return value;
        }
        else {
            return 'Zero';
        }
    };
}
 
export default Counter;