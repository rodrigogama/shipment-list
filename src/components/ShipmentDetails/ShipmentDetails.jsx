import React from 'react';
import { formatDate } from '../../utils';
import {
  ShipmentContainer,
  ShipmentTitleContainer,
  FlexRow,
  TextBold,
  TextRegular,
  ShipmentStopsContainer,
  StopWrapper,
  StopTitle,
  Map
} from './ShipmentDetailsStyles';
import icons from '../../icons';

const getIcon = iconName => {
  const Icon = icons[iconName];
  return <Icon style={{ width: '40px', height: '40px' }} />;
};

const ShipmentDetails = ({ shipment }) => {
  const { stops, map } = shipment;
  const [pickup, delivery] = stops;
  return (
    <ShipmentContainer>
      <ShipmentTitleContainer>
        <TextBold>
          {`${pickup.city}, ${pickup.state} > ${delivery.city}, ${delivery.state}`}
        </TextBold>
      </ShipmentTitleContainer>

      <FlexRow>
        <ShipmentStopsContainer>
          <StopWrapper>
            <StopTitle>Pickup</StopTitle>
            <TextBold as="p" style={{ lineHeight: '1.8' }}>
              {`${pickup.city}, ${pickup.state} ${pickup.zipcode}`}
            </TextBold>
            <FlexRow>
              <TextRegular>{`${formatDate(pickup.windowStart)}`}</TextRegular>
              <TextRegular style={{ marginLeft: '12px' }}>
                {`${formatDate(pickup.windowStart, 'HH:00')} - ${formatDate(
                  pickup.windowEnd,
                  'HH:00'
                )}`}
              </TextRegular>
            </FlexRow>
            <FlexRow>{delivery.accessorials.map(e => getIcon(e))}</FlexRow>
          </StopWrapper>

          <StopWrapper>
            <StopTitle>Delivery</StopTitle>
            <TextBold as="p" style={{ lineHeight: '1.8' }}>
              {`${delivery.city}, ${delivery.state} ${delivery.zipcode}`}
            </TextBold>
            <FlexRow>
              <TextRegular>{`${formatDate(delivery.windowStart)}`}</TextRegular>
              <TextRegular style={{ marginLeft: '12px' }}>
                {`${formatDate(
                  delivery.windowStart,
                  'HH:00',
                  delivery.startTimeZone
                )} - ${formatDate(delivery.windowEnd, 'HH:00', delivery.startTimeZone)}`}
              </TextRegular>
            </FlexRow>
            <FlexRow>{delivery.accessorials.map(e => getIcon(e))}</FlexRow>
          </StopWrapper>
        </ShipmentStopsContainer>

        <figure>
          <Map src={map} alt="Map" />
        </figure>
      </FlexRow>
    </ShipmentContainer>
  );
};

export default ShipmentDetails;
