// CarListings component, displaying all of our results from querying
import React from 'react';
import PropTypes from 'prop-types';
import CarDetails from './CarDetails';

const propTypes = {
  carData: PropTypes.object,
};

const CarListings = ({ carData }) => (
  <div className="car-listings offset-1 col-8 container-fluid">
    <h2>
      Showing 10 of {carData['num_found']} results.
    </h2>

    {
      carData['listings'].map((listing, i) => (
        <CarDetails
          key={i}
          heading={listing['heading']}
          image={listing['media']['photo_links'][0]}
          price={listing['price']}
          msrp={listing['msrp']}
          vdp_url={listing['vdp_url']}
          miles={listing['miles']}
          vin={listing['vin']}
          condition={listing['inventory_type']}
          transmission={listing['build']['transmission']}
          driveTrain={listing['build']['drivetrain']}
          engine={listing['build']['engine']}
          interiorColor={listing['interior_color']}
          exteriorColor={listing['exterior_color']}
          location={listing['dealer']['city']}
          dealer={listing['dealer']['name']}
        />
      ))
    }
  </div>
);

CarListings.propTypes = propTypes;

CarListings.defaultProps = {
  carData: null,
};

export default CarListings;
