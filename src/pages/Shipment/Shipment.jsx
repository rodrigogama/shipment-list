import React, { Fragment } from 'react';
import { ShipmentConsumer } from '../../context/ShipmentContext';
import AppBar from '../../components/AppBar';
import ListShipments from '../../components/ListShipments';
import { Page, PageContent } from './ShipmentStyles';

const Shipment = () => (
  <Page>
    <AppBar />
    <PageContent>
      <ShipmentConsumer>
        {({ isLoading, listShipments, onSelectShipment, shipmentDetails }) => (
          <Fragment>
            <ListShipments
              items={listShipments}
              onSelectShipment={onSelectShipment}
              selectedItemId={shipmentDetails.id}
            />
            {JSON.stringify(shipmentDetails)}
          </Fragment>
        )}
      </ShipmentConsumer>
    </PageContent>
  </Page>
);

export default Shipment;
