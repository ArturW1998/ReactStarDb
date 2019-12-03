import React from 'react';
import { SwapiServiceConsumer } from '../../context/swapi-service-context';

const withSwapiService = (mapMethodsToProps) => (Wrapped) => (props => (
  <SwapiServiceConsumer>
    {
      (swapiService) => {
        const serviceProps = mapMethodsToProps(swapiService);

        return (
          <Wrapped {...props} {...serviceProps} />
        );
      }
    }
  </SwapiServiceConsumer>
));

export default withSwapiService;
