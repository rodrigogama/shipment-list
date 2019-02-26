import React from 'react';
import { formatCurrency, formatDate } from '../../utils';
import {
  ShipmentListContainer,
  ShipmentListItem,
  StopsContainer,
  StopWrapper,
  FlexRow,
  TruckIcon,
  TitleText,
  TextRegular,
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
          <FlexRow>
            <TruckIcon />
            <TitleText>{`${item.equipmentType} ${item.equipmentSize}"`}</TitleText>
            <PriceText>{formatCurrency(item.fare)}</PriceText>
          </FlexRow>
          <StopsContainer>
            {item.stops.map((stop, index) => (
              <StopWrapper key={`stop_${index}`}>
                <TextBold>{`${stop.city}, ${stop.state} ${stop.zipcode}`}</TextBold>
                <TextRegular>{formatDate(stop.windowStart)}</TextRegular>
              </StopWrapper>
            ))}
          </StopsContainer>
        </ShipmentListItem>
      ))}
    </ShipmentListContainer>
  );
};

export default ListShipments;
