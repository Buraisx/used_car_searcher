// CarSearchForm to gather user input
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  carData: PropTypes.object,
  changeModelList: PropTypes.func,
  getCarDetailsFunc: PropTypes.func,
  makers: PropTypes.object,
  models: PropTypes.array,
};

const CarSearchForm = (props) => (
  <form onSubmit={props.getCarDetailsFunc} className={`listing__search-form ${(props.carData ? 'col-2' : 'col-4 offset-4')}`}>

    {/* <img src="https://cover.com/insurance/static/media/logo-icon.77ca8e24.svg" alt="cover" className="mx-auto d-block" /> */}

    <p className="listing__search-form-info">Enter car details below.</p>
    <div className="form-row">
      <div className={`form-group ${(props.carData ? 'col-12' : 'col-6')}`}>
        <label htmlFor="make">Make</label>
        <select id="make" className="form-control" onChange={(e) => props.changeModelList(e)}>
          {
            Object.keys(props.makers).map((name, i) => (
              <option key={i}>
                {name}
              </option>
            ))
          }
        </select>
      </div>

      <div className={`form-group ${(props.carData ? 'col-12' : 'col-6')}`}>
        <label htmlFor="model">Model</label>
        <select id="model" className="form-control">
          {
            props.models.map((model, i) => (
              <option key={i}>
                {model}
              </option>
            ))
          }
        </select>
      </div>
    </div>

    <div className="form-row">
      <div className={`form-group ${(props.carData ? 'col-12' : 'col-6')}`}>
        <label htmlFor="year">Year</label>
        <input id="year" type="text" className="form-control" placeholder="Model Year" />
      </div>
      <div className={`form-group ${(props.carData ? 'col-12' : 'col-6')}`}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" className="form-control" placeholder="Dealer City" />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="vin">VIN #</label>
      <input id="vin" type="text" className="form-control" placeholder="Model's VIN Number" />
    </div>

    <div className="form-group">
      <button type="submit" className="btn btn-outline-success" value="submit">
        Search
      </button>
    </div>
  </form>
);

CarSearchForm.propTypes = propTypes;

export default CarSearchForm;
