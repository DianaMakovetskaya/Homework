import React, {Component} from 'react';

class CarComponent extends Component {
    render() {
        let {item}=this.props
        return (
            <div>
                Model:{item.model} Price:{item.price} Producer:{item.producer}
            </div>
        );
    }
}

export default CarComponent;