// CarDetails component, displaying content of each individual listing
import React from 'react';
import PropTypes from 'prop-types';

// IDEALLY we want to reduce the repetitiveness in the future
const propTypes = {
  heading: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  msrp: PropTypes.number,
  vdp_url: PropTypes.string,
  miles: PropTypes.number,
  vin: PropTypes.string,
  condition: PropTypes.string,
  transmission: PropTypes.string,
  driveTrain: PropTypes.string,
  engine: PropTypes.string,
  interiorColor: PropTypes.string,
  exteriorColor: PropTypes.string,
  location: PropTypes.string,
  dealer: PropTypes.string,
};

const CarDetails = (props) => (
  <div className="row">
    <div className="listing__details col-5">
      <h3 className="listing__title">{props.heading}</h3>
      <h4 className="listing__specs">Details</h4>
      <div className="row">
        <div className="col-6">
          <p>Price</p>
        </div>
        <div>
          <p>{"$" +props.price}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>MSRP</p>
        </div>
        <div>
          <p>{"$" + props.msrp}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>Dealer</p>
        </div>
        <div>
          <p>{props.dealer}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>Location</p>
        </div>
        <div>
          <p>{props.location}</p>
        </div>
      </div>
      <h4 className="listing__specs">Specifications</h4>
      <div className="row">
        <div className="col-6">
          <p>Mileage</p>
        </div>
        <div>
          <p>{props.miles}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>Condition</p>
        </div>
        <div>
          <p>{props.condition}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>VIN</p>
        </div>
        <div>
          <p>{props.vin}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>Drive Train</p>
        </div>
        <div>
          <p>{props.driveTrain}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>Interior Color</p>
        </div>
        <div>
          <p>{props.interiorColor}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>Exterior Color</p>
        </div>
        <div>
          <p>{props.exteriorColor}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>Transmission</p>
        </div>
        <div>
          <p>{props.transmission}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>Engine</p>
        </div>
        <div>
          <p>{props.engine}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <a href={props.vdp_url} className="btn btn-outline-info dealer-btn">Visit the dealer page here!</a>
        </div>
      </div>
    </div>
    <div className="col-7 listing__image">
      <img src={props.image} alt='Stock photo of car' className="img-fluid" />
    </div>
  </div>

);

CarDetails.propTypes = propTypes;

CarDetails.defaultProps = {
  heading: '',
  image: '',
  price: 0,
  msrp: 0,
  vdp_url: '',
  miles: 0,
  vin: '-',
  condition: '-',
  transmission: '-',
  driveTrain: '-',
  engine: '-',
  interiorColor: '-',
  exteriorColor: '-',
  location: '-',
  dealer: '-',
};
export default CarDetails;
