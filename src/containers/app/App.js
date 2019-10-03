import React, { Component } from 'react';
import './App.css';
import CarListings from '../../components/CarListings';
import CarSearchForm from '../../components/CarSearchForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carData: null,
      // Dropdown options for Makers and models
      makersObj: { 'Any Make': ['Any Model'] },
      modelsArr: ['Any Model'],
    };
    this.getCarDetails = this.getCarDetails.bind(this);
    this.changeModelList = this.changeModelList.bind(this);
  }

  componentDidMount() {
    // Arbitrarily Take 50 new cars to generate makers
    // Dropdowns are to force the user to pick instead of Type
    const makers = {
      'Any Make': ['Any Model'],
    };
    // GET the most popular newest car brands
    fetch('https://marketcheck-prod.apigee.net/v1/popular/cars?api_key=7IzMc2XJonkSdHAMIP4CzYiuGOFXrho0&car_type=new')
      .then((res) => res.json()).then((body) => {
        for (let i = 1; i < body.length; i++) {
          // Create make key if it does not exist in our object
          if (makers[body[i].make] === undefined) {
            makers[body[i].make] = ['Any Model'];
          }
          // Add models to makers
          makers[body[i].make].push(body[i].model);
        }
        // When finished creating our object, replace the original state
        this.setState({
          makersObj: makers,
        });
        console.log(this.state.makersObj);
      }).catch((err) => {
        console.log(err);
      });
  }

  getCarDetails(e) {
    // Key1: mlHPmxwJfS7SuxcSssL8H6NDNydwdtlz
    // Key2: 7IzMc2XJonkSdHAMIP4CzYiuGOFXrho0
    // Test VIN: 58ABK1GG5GU031036
    e.preventDefault();

    // Generate query String from carSearchForm
    let queryString = '';
    for (let i = 0; i <= 4; i++) {
      if (e.target[i].value !== 'Any Make' && e.target[i].value !== 'Any Model') {
        queryString += `&${e.target[i].id}=${e.target[i].value}`;
      }
    }

    // fetch request for listings based on params
    fetch(`https://marketcheck-prod.apigee.net/v1/search?api_key=7IzMc2XJonkSdHAMIP4CzYiuGOFXrho0&radius=10000${queryString}`)
      .then((res) => res.json()).then((body) => {
        this.setState({
          carData: body,
        });
        console.log(this.state.carData);
      }).catch((err) => {
        console.log(err);
      });
  }

  // Change list of models based on car maker
  changeModelList(e) {
    this.setState({
      modelsArr: this.state.makersObj[e.target.value],
    });
  }

  render() {
    return (
      <main className="container-fluid">
        <div className={`row listing-container ${(this.state.carData ? '' : 'listing-container--center')}`}>
          <CarSearchForm
            carData={this.state.carData}
            getCarDetailsFunc={this.getCarDetails}
            makers={this.state.makersObj}
            models={this.state.modelsArr}
            changeModelList={this.changeModelList}
          />
          { this.state.carData ? 
            (<CarListings carData={this.state.carData} />) : (null)
          }
        </div>
      </main>
    );
  }
}

export default App;
