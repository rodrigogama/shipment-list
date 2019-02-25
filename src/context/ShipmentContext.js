import React, { PureComponent } from 'react';
import shipmentAPI from '../services';

const ShipmentContext = React.createContext();

class ShipmentProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      listShipments: [],
      shipmentDetails: {}
    };

    this.onSelectShipmentHandler = this.onSelectShipmentHandler.bind(this);
  }

  componentDidMount() {
    this.loadShipments();
  }

  onSelectShipmentHandler(shipment) {
    const { id } = shipment;
    shipmentAPI
      .getShipmentDetails(id)
      .then(response => response.data)
      .then(details => this.setState({ shipmentDetails: details, isLoading: false }));
  }

  loadShipments() {
    shipmentAPI
      .getShipmentList()
      .then(response => response.data)
      .then(list => this.setState({ listShipments: list, isLoading: false }));
  }

  render() {
    const { isLoading, listShipments, shipmentDetails } = this.state;
    const { children } = this.props;

    const value = {
      isLoading,
      listShipments,
      shipmentDetails,
      onSelectShipment: this.onSelectShipmentHandler
    };

    return <ShipmentContext.Provider value={value}>{children}</ShipmentContext.Provider>;
  }
}

const ShipmentConsumer = ShipmentContext.Consumer;

export { ShipmentProvider, ShipmentConsumer };
