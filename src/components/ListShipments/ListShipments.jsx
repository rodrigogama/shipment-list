import React from 'react';
import { formatCurrency, formatDate } from '../../utils';
import {
  ShipmentListContainer,
  ShipmentListItem,
  HeaderItem,
  BodyItem,
  TruckIcon,
  TitleText,
  TextBold,
  PriceText
} from './ListShipmentsStyles';

const ListShipments = ({ items, onSelectShipment, selectedItemId }) => {
  return (
    <ShipmentListContainer>
      {items.map(item => (
        <ShipmentListItem
          key={item.id}
          onClick={() => onSelectShipment(item)}
          active={item.id === selectedItemId}
        >
          <HeaderItem>
            <TruckIcon />
            <TitleText>{`${item.equipmentType} ${item.equipmentSize}"`}</TitleText>
            <PriceText>{formatCurrency(item.fare)}</PriceText>
          </HeaderItem>
          <BodyItem>
            {item.stops.map((stop, index) => (
              <TextBold key={`stop_${index}`}>
                {`${stop.city}, ${stop.state} ${stop.zipcode}`} <br />
                {formatDate(stop.windowStart)}
              </TextBold>
            ))}
          </BodyItem>
        </ShipmentListItem>
      ))}
    </ShipmentListContainer>
  );
};

export default ListShipments;
