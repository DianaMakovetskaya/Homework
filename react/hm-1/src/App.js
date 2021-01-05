import React, {Component} from 'react';
import CarComponent from "./CarComponent/CarComponent";

class App extends Component {
  cars=[{model:'cx3',price:30000,producer:'mazda'},{model:'x5',price:32000,producer:'bmw'},{model:'q8',price:35000,producer:'audi'}]
    render() {
        return (
            <div>
              {
                this.cars.map((car,index)=><CarComponent item={car} key={index}/>)
              }
            </div>
        );
    }
}

export default App;