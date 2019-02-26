import React, { Fragment } from 'react';
import { ShipmentConsumer } from '../../context/ShipmentContext';
import AppBar from '../../components/AppBar';
import ListShipments from '../../components/ListShipments';
import ShipmentDetails from '../../components/ShipmentDetails';
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

            {Object.keys(shipmentDetails).length > 0 ? (
              <ShipmentDetails shipment={shipmentDetails} />
            ) : null}
          </Fragment>
        )}
      </ShipmentConsumer>
    </PageContent>
  </Page>
);

export default Shipment;
